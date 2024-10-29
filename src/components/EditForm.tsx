import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Alert, Button, FormHelperText, MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Controller, useForm } from "react-hook-form";

const areaTypes = [
  "",
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
  onSubmit: (data: EditData) => void;
  openAlert: boolean;
}

export function EditForm({ values, onSubmit, openAlert }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditData>({ defaultValues: values });
  return (
    <>
      <Box
        gap={1.5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Typography variant="h5">Editar Proyecto</Typography>

        <Grid
          container
          width={"100%"}
          flexDirection={"column"}
          columnSpacing={2}
          rowSpacing={4}
        >
          <Controller
            name="area"
            control={control}
            rules={{ required: "Este campo es requerido." }}
            render={({ field }) => (
              <>
                <Select fullWidth error={Boolean(errors.area)} {...field}>
                  {areaTypes.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                {Boolean(errors.area) && (
                  <FormHelperText>{errors.area?.message}</FormHelperText>
                )}
              </>
            )}
          />
          <Controller
            name="title"
            control={control}
            rules={{ required: "Este campo es requerido." }}
            render={({ field }) => (
              <TextField
                fullWidth
                error={Boolean(errors.title)}
                helperText={errors.title?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="descrip"
            control={control}
            rules={{ required: "Este campo es requerido." }}
            render={({ field }) => (
              <TextField
                fullWidth
                multiline
                error={Boolean(errors.descrip)}
                helperText={errors.descrip?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="user_name"
            control={control}
            rules={{ required: "Este campo es requerido." }}
            render={({ field }) => (
              <TextField
                fullWidth
                error={Boolean(errors.user_name)}
                helperText={errors.user_name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="progress"
            control={control}
            rules={{ required: "Este campo es requerido." }}
            render={({ field }) => (
              <Select fullWidth {...field}>
                {progressTypes.map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <Button
            fullWidth
            size="large"
            type="submit"
            color="secondary"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Guardar
          </Button>
        </Grid>
        {openAlert && (
          <Alert severity="error">Ocurrió un error al guardar.</Alert>
        )}
      </Box>
    </>
  );
}
