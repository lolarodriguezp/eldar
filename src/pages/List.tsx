import * as React from "react";
import DataTable from "../components/DataTable";
import { EldarService } from "../services/EldarService";
import { useAuth } from "../common/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton, Snackbar } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Alert as AlertMUI } from "@mui/material";

import Alert from "../components/Alert";
import DeleteAlert from "../components/DeleteAlert";

export type Data = {
  id: number;
  area: string;
  title: string;
  descrip: string;
  user_name: string;
  progress: string;
  actions?: [];
};

type Alert = {
  open: boolean;
  item: Data;
};

const defaultData = {
  id: 0,
  area: "",
  title: "",
  descrip: "",
  user_name: "",
  progress: "",
};

export default function ListPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = React.useState<Data[]>([]);
  const [alert, setAlert] = React.useState<Alert>({
    open: false,
    item: defaultData,
  });
  const [success, setSuccess] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (location.state) {
      location.state.success && setSuccess(location.state.success);
      navigate("/", { state: null }); // no considero que sea una buena manera de resetear el estado, se deberia manejar por contexto global
    }
    EldarService.getList()
      .then((response) => {
        const auxData = response.data.map((d: Data) => {
          return {
            actions: actions(d),
            ...d,
          };
        });
        setData(auxData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (id: number) => {
    navigate(`edit/${id}`);
  };

  const handleDetail = (id: number) => {
    navigate(`detail/${id}`);
  };

  const handleDelete = (data: Data) => {
    setAlert({ open: true, item: data });
  };

  const alertAccept = () => {
    const newData = data.filter((d: Data) => d.id !== alert.item.id);
    setData(newData);
    setAlert({ open: false, item: defaultData });
    setSuccess(true);
  };

  const alertCancel = () => {
    setAlert({ open: false, item: defaultData });
  };

  const actions = (data: Data) => {
    const buttons = [
      <IconButton color="primary" onClick={() => handleDetail(data.id)}>
        <VisibilityOutlinedIcon />
      </IconButton>,
    ];

    user?.role === "admin" &&
      buttons.push(
        <IconButton onClick={() => handleEdit(data.id)}>
          <CreateOutlinedIcon />
        </IconButton>,
      );
    user?.role === "admin" &&
      buttons.push(
        <IconButton color="error" onClick={() => handleDelete(data)}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>,
      );
    return buttons;
  };

  return (
    <>
      <DataTable rows={data} />
      <DeleteAlert
        open={alert.open}
        itemDescrip={`el proyecto ${alert.item.title}`}
        handleCancel={alertCancel}
        handleAccept={alertAccept}
      />
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={5000}
          onClose={() => setSuccess(false)}
        >
          <AlertMUI severity="success">Operación exitosa.</AlertMUI>
        </Snackbar>
      )}
    </>
  );
}
