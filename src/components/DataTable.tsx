import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Data } from "../pages/List";
import theme from "../theme";

interface DataTableProps {
  rows: Data[];
}

export default function DataTable({ rows }: DataTableProps) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "#", width: 70 },
    { field: "area", headerName: "Área", width: 180 },
    { field: "title", headerName: "Título", width: 200 },
    { field: "descrip", headerName: "Descripción", width: 250 },
    { field: "user_name", headerName: "Responsable", width: 130 },
    {
      field: "progress",
      headerName: "Progreso",
      width: 130,
      renderCell: (params) => {
        const color =
          params.value === "Not Started"
            ? "info"
            : params.value === "In Progress"
              ? "warning"
              : "success";
        return (
          <span style={{ color: `${theme.palette[color].main}` }}>
            {params.value}
          </span>
        );
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => params.value,
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
