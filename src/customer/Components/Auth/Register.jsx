import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../Redux/Auth/Action";

export default function RegisterUserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarType, setSnackBarType] = useState("success");
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) dispatch(getUser(jwt));
  }, [jwt, dispatch]);

  useEffect(() => {
    if (auth.error) {
      setSnackBarMsg(auth.error);
      setSnackBarType("error");
      setOpenSnackBar(true);
    } else if (auth.user) {
      setSnackBarMsg("Registration successful!");
      setSnackBarType("success");
      setOpenSnackBar(true);
    }
  }, [auth]);

  const handleClose = () => setOpenSnackBar(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    dispatch(
      register({
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        role: data.get("role"),
      })
    );
  };

  return (
    <>
      <Typography
        variant="h5"
        fontWeight={700}
        color="primary"
        mb={1}
        textAlign="center"
      >
        Create Account
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        mb={3}
        textAlign="center"
      >
        Fill in your details below to get started.
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="firstName"
              label="First Name"
              variant="outlined"
              autoComplete="given-name"
              InputLabelProps={{ sx: { fontWeight: "600" } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="lastName"
              label="Last Name"
              variant="outlined"
              autoComplete="family-name"
              InputLabelProps={{ sx: { fontWeight: "600" } }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="email"
              label="Email Address"
              variant="outlined"
              type="email"
              autoComplete="email"
              InputLabelProps={{ sx: { fontWeight: "600" } }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel id="role-label" sx={{ fontWeight: "600" }}>
                Role
              </InputLabel>
              <Select
                labelId="role-label"
                name="role"
                label="Role"
                defaultValue=""
                sx={{ textTransform: "capitalize" }}
              >
                <MenuItem value="ROLE_ADMIN">Admin</MenuItem>
                <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="new-password"
              InputLabelProps={{ sx: { fontWeight: "600" } }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #7b3fe4 0%, #9155fd 100%)",
                fontWeight: "700",
                fontSize: "1rem",
                py: 1.2,
                borderRadius: 2,
                "&:hover": {
                  background: "linear-gradient(90deg, #6a2ce4 0%, #7d3ffd 100%)",
                },
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        mt={3}
      >
        Already have an account?{" "}
        <Button
          onClick={() => navigate("/login")}
          size="small"
          sx={{ textTransform: "none", fontWeight: 300, color: "primary.main" }}
        >
          Log In
        </Button>
      </Typography>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackBarType}
          variant="filled"
          sx={{ width: "100%", fontWeight: "600" }}
        >
          {snackBarMsg}
        </Alert>
      </Snackbar>
    </>
  );
}
