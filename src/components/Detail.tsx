import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

const areaTypes = [
  "R+D",
  "Software Quality",
  "POS Platform",
  "Full stack engineering",
  "E-Commerce",
  "Tecnologias",
];

const progressTypes = ["Not Started", "In Progress", "Completed"];

export type EditData = {
  area: typeof areaTypes;
  title: string;
  descrip: string;
  user_name: string;
  progress: typeof progressTypes;
};

interface Props {
  values: EditData;
}

export function Detail({ values }: Props) {
  return (
    <>
      <Box
        gap={1.5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Typography variant="h5">{`${values.title}`}</Typography>

        <Grid
          container
          size={4}
          width={"100%"}
          flexDirection={"column"}
          columnSpacing={2}
          rowSpacing={4}
        >
          <Typography>
            {" "}
            {values.user_name} - {values.progress}{" "}
          </Typography>
          <Typography> {values.descrip} </Typography>
        </Grid>
      </Box>
    </>
  );
}
