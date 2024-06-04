// import React, { useState, ChangeEvent } from "react";
// import { Button, Grid, Typography, Link, TextField } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../../app/auth/authSlice";
// import { AppDispatch } from "../../../app/store";
// import { Toaster } from "react-hot-toast";

// interface FormState {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// const RegisterPage: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [submitting, setSubmitting] = useState(false);
//   const [formData, setFormData] = useState<FormState>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     setSubmitting(true);
//     try {
//       await dispatch(registerUser(formData));
//       // Registration successful, can redirect to another page or show a success message
//     } catch (err) {
//       console.log(err);
//       // Handle registration error here, you can set an error state and display it to the user
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <React.Fragment>
//       <Toaster />
//       <Grid
//         container
//         spacing={2}
//         justifyContent="center"
//         alignItems="center"
//         style={{ height: "100vh" }}
//       >
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h4" align="center">
//             Register
//           </Typography>
//           <TextField
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             required
//             id="firstName"
//             label="First Name"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             autoFocus
//           />
//           <TextField
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             required
//             id="lastName"
//             label="Last Name"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             required
//             id="email"
//             label="Email Address"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             required
//             id="password"
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <Button
//             onClick={handleSubmit}
//             fullWidth
//             variant="contained"
//             color="primary"
//             size="large"
//             style={{ marginTop: "1rem" }}
//             disabled={submitting}
//           >
//             {submitting ? "Submitting..." : "Register"}
//           </Button>
//           <Typography
//             variant="body2"
//             align="center"
//             style={{ marginTop: "1rem" }}
//           >
//             Already have an account?{" "}
//             <Link component={RouterLink} to="/login">
//               Sign in
//             </Link>
//           </Typography>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default RegisterPage;
import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Grid,
  Typography,
  Link,
  TextField,
  Paper,
  Box,
  Container,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../app/auth/authSlice";
import { AppDispatch } from "../../../store";
import { Toaster } from "react-hot-toast";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await dispatch(registerUser(formData));
    } catch (err) {
      console.log(err);
      // Handle registration error here, you can set an error state and display it to the user
    } finally {
      setSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "64px" }}>
      <Paper elevation={6} style={{ padding: "32px", borderRadius: "8px" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PersonAddIcon
            color="primary"
            style={{ fontSize: "40px", marginBottom: "16px" }}
          />
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <Toaster />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            id="firstName"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            autoFocus
            style={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            id="password"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            style={{ marginBottom: "16px" }}
          />
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: "16px", marginBottom: "16px" }}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Register"}
          </Button>
          <Typography
            variant="body2"
            align="center"
            style={{ marginTop: "16px" }}
          >
            Already have an account?{" "}
            <Link component={RouterLink} to="/login">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
