import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {/* Email field */}
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      {/* password field */}
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      {/* Login Button */}
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#eebc1d" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Login;
