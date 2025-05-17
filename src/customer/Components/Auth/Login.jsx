import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../../Redux/Auth/Action";

export default function LoginUserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) dispatch(getUser(jwt));
  }, [jwt, dispatch]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user, auth.error]);

  const handleClose = () => setOpenSnackBar(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    dispatch(
      login({
        email: data.get("email"),
        password: data.get("password"),
      })
    );
  };

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary.dark"
        mb={1}
        textAlign="center"
        letterSpacing={1}
      >
        Welcome Back
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        mb={4}
        textAlign="center"
      >
        Please login to your account.
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="email"
              label="Email Address"
              variant="outlined"
              size="medium"
              type="email"
              autoComplete="email"
              InputLabelProps={{ sx: { fontWeight: "600" } }}
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              variant="outlined"
              size="medium"
              type="password"
              autoComplete="current-password"
              InputLabelProps={{ sx: { fontWeight: "600" } }}
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #7b3fe4 0%, #9155fd 100%)",
                fontWeight: "700",
                fontSize: "1.1rem",
                py: 1.4,
                borderRadius: 3,
                transition: "background 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #6a2ce4 0%, #7d3ffd 100%)",
                },
              }}
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: 0.5 }}>
          Don’t have an account?{" "}
          <Button
            onClick={() => navigate("/register")}
            size="small"
            sx={{ textTransform: "none", fontWeight: 300, color: "primary.main" }}
          >
            Register
          </Button>
        </Typography>
      </Box>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={auth.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%", fontWeight: "600" }}
        >
          {auth.error ? auth.error : "Login successful!"}
        </Alert>
      </Snackbar>
    </>
  );
}
