import axios from "axios";

const API = "https://my-json-server.typicode.com/lolarodriguezp/eldar-mock";

export const EldarService = {
  getList: () => axios({ url: `${API}/posts` }),
  getItem: (id: number) => axios({ url: `${API}/posts/${id}` }),
  updateItem: (id: number) =>
    axios({ method: "PUT", url: `${API}/posts/${id}` }),
};
