import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginUserForm from "./Login";
import RegisterUserForm from "./Register";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  maxWidth: 480,
  bgcolor: "#fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  borderRadius: 12,
  p: 4,
  outline: "none",
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
  }, [auth.user, handleClose]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          style: { backgroundColor: "rgba(0,0,0,0.32)" },
        },
      }}
      aria-labelledby="auth-modal-title"
      aria-describedby="auth-modal-description"
    >
      <Fade in={open}>
        <Box sx={style} tabIndex={-1}>
          {location.pathname === "/login" ? <LoginUserForm /> : <RegisterUserForm />}
        </Box>
      </Fade>
    </Modal>
  );
}
