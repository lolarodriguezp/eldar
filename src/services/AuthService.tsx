import { BehaviorSubject, Observable } from "rxjs";
import { randomAlphaNumeric } from "../utils/functions";
import { users } from "./usersMock";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export type LoginUser = {
  username: string;
  password: string;
};

interface AuthService {
  expirationTime: number;
  idleInterval: NodeJS.Timer | null;
  idleTime: number;
  currentUser: Observable<User | null>;
  currentUserValue: () => User | null;
  login: (user: LoginUser) => LoginUser | undefined;
  logout: () => void;
  refresh: () => void;
  loadUser: (refresh?: boolean) => User | undefined;
  getToken: () => string;
  removeListeners: () => void;
  timerIncrement: () => void;
  startListeners: () => void;
}

const currentUserSubject = new BehaviorSubject<User | null>(null);

export const AuthService: AuthService = {
  expirationTime: 60 * 60, // Seconds
  idleInterval: null,
  idleTime: 0,
  currentUser: currentUserSubject.asObservable(),

  currentUserValue: () => {
    return currentUserSubject.value;
  },

  login: (user: LoginUser) => {
    const isUser = users.find(
      (u) => u.username === user.username && u.password === user.password,
    );
    if (isUser) {
      // la carga del usuario deberia ser luego, a traves del access token
      localStorage.setItem("currentUser", JSON.stringify(isUser.data));
      //
      localStorage.setItem("access", randomAlphaNumeric(50));
      localStorage.setItem("refresh", randomAlphaNumeric(50));
      return user;
    }
    return;
  },

  logout: () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    currentUserSubject.next(null);
    AuthService.removeListeners();
  },

  refresh: () => {
    const refresh = localStorage.getItem("refresh");
    if (refresh) {
      const returnedAccess = randomAlphaNumeric(50);
      const returnedRefresh = randomAlphaNumeric(50);
      localStorage.setItem("access", returnedAccess);
      localStorage.setItem("refresh", returnedRefresh);
    }
  },

  loadUser: (refresh = false) => {
    if (refresh) {
      AuthService.refresh();
    }

    const access = localStorage.getItem("access");
    if (!access) {
      return;
    }

    // aca iria la carga del usuario
    // localStorage.setItem("currentUser", JSON.stringify(user));

    const storageUser = localStorage.getItem("currentUser");

    if (!storageUser) {
      return;
    }

    const user = JSON.parse(storageUser);
    currentUserSubject.next(user);
    AuthService.startListeners();

    return user;
  },

  getToken() {
    return `Bearer ${localStorage.getItem("access")}`;
  },

  removeListeners: () => {
    if (AuthService.idleInterval) clearInterval(AuthService.idleInterval);
  },

  timerIncrement: () => {
    AuthService.idleTime = AuthService.idleTime + 1;
  },

  startListeners: () => {
    AuthService.idleInterval = setInterval(AuthService.timerIncrement, 1000);
  },
};
