import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { EditData, EditForm } from "../components/EditForm";
import { EldarService } from "../services/EldarService";

export const EditPage = () => {
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const [item, setItem] = React.useState<EditData>();

  React.useEffect(() => {
    if (id) {
      const idNumber = parseInt(id);
      EldarService.getItem(idNumber)
        .then((response) => setItem(response.data))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleEdit = () => {
    EldarService.updateItem(1)
      .then((response) => navigate("/", { state: { success: true } }))
      .catch((error) => setOpenAlert(true));
  };

  return (
    <>
      {item ? (
        <EditForm values={item} onSubmit={handleEdit} openAlert={openAlert} />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", margin: 32 }}>
          {" "}
          <CircularProgress />{" "}
        </Box>
      )}
    </>
  );
};
