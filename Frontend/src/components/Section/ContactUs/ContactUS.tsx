import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={4} textAlign="center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/path/to/your/logo.png"
            alt="Company Logo"
            style={{ width: "150px", marginBottom: "20px" }}
          />
        </motion.div>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ color: "#3f51b5", marginBottom: "20px" }}
        >
          Contact Us
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              style={{
                marginBottom: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              style={{
                marginBottom: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              style={{ backgroundColor: "#ffffff", borderRadius: "5px" }}
            />
          </motion.div>
          <Box mt={2} style={{ textAlign: "center" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ backgroundColor: "#3f51b5", color: "#ffffff" }}
              >
                Submit
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
