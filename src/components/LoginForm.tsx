import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Alert, Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";
import { LoginUser } from "../services/AuthService";

interface Props {
  onSubmit: (data: LoginUser) => void;
  openAlert: boolean;
}

export function LoginForm({ onSubmit, openAlert }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();
  return (
    <Paper sx={{ padding: "16px" }}>
      <Box
        gap={1.5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Typography variant="h5">Iniciar sesión</Typography>

        <Grid container size={4}>
          <TextField
            fullWidth
            id="username"
            label="Usuario"
            {...register("username", {
              required: "Usuario requerido",
              minLength: {
                value: 8,
                message: "Debe contener al menos 8 caracteres.",
              },
            })}
            sx={{ mb: 3 }}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
          />
          <TextField
            fullWidth
            id="password"
            type="password"
            label="Contraseña"
            {...register("password", {
              required: "Contraseña requerida",
              minLength: {
                value: 8,
                message: "Debe contener al menos 8 caracteres.",
              },
            })}
            sx={{ mb: 3 }}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <Link variant="body2" color="inherit" sx={{ mb: 1.5 }}>
            Olvidaste tu contraseña?
          </Link>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Ingresar
          </Button>
        </Grid>
        {openAlert && (
          <Alert severity="error">
            Las credenciales ingresadas son incorrectas.
          </Alert>
        )}
      </Box>
    </Paper>
  );
}
