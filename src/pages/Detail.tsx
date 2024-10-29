import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { EditData } from "../components/EditForm";
import { EldarService } from "../services/EldarService";
import { Detail } from "../components/Detail";

export const DetailPage = () => {
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

  return (
    <>
      {item ? (
        <Detail values={item} />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", margin: 32 }}>
          {" "}
          <CircularProgress />{" "}
        </Box>
      )}
    </>
  );
};
