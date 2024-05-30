import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Link,
  TextField,
  FormControl,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../app/auth/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const error = useSelector((state: any) => state.auth.error);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log(formData)
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      dispatch(registerUser(formData)); // Dispatch registerUser action with form data
      // Clear form fields on successful submission
    //   setFormData({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //   });
      // Optionally show a success message or navigate to another page
    } catch (err) {
      // Handle error (e.g., display error message)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" align="center">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              style={{ marginTop: "1rem" }}
            >
              Register
            </Button>
          </FormControl>
        </form>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem" }}
        >
          Already have an account?{" "}
          <Link component={RouterLink} to="/login">
            Sign in
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
