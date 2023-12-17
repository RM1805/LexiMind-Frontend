import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = "https://leximind.onrender.com";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor="#F0F8FF"
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, nb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight={"bold"}>
        LexiMind
      </Typography>
      {loggedIn ? (
        <>
          <Link to="/" p={1}>
            Home
          </Link>
          <Link to="/login" p={1} onClick={handleLogout}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            color={"primary"}
            style={{ textDecoration: "none" }}
            to="/register"
            p={1}
          >
            Sign Up
          </Link>
          <Link
            color={"primary"}
            style={{ textDecoration: "none" }}
            to="/login"
            p={1}
          >
            Login
          </Link>
        </>
      )}
    </Box>
  );
};

export default Navbar;
