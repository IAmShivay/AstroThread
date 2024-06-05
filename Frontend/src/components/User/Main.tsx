import React from "react";
import {
  Container,
  Typography,
  ListItemText,
  Button,
  Divider,
  Paper,
  styled,
  Card,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StyledContainer = styled(Container)({
  padding: "60px",
  borderRadius: "20px", // Adding border radius to the container
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  position: "relative",
  textAlign: "center",
  maxWidth: "800px",
});

const ClipPathPattern = styled("div")({
  position: "absolute",
  borderRadius: "20px",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  clipPath: "polygon(0 0, 30% 0, 20% 100%, 0% 100%)",
  backgroundColor: "#3f51b5",
  zIndex: -1,
});

const UserDashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledContainer>
        <ClipPathPattern />
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          User Dashboard
        </Typography>
        <Card style={{ margin: "20px 0", textAlign: "left", padding: "10px" ,borderRadius:'20px'}}>
          <Box p={2}>
            <Typography component={Link} to="/profile" style={{ textDecoration: 'none', color: '#3f51b5' }}>
              <ListItemText
                primary="Profile"
                secondary="Update your profile information."
              />
            </Typography>
            <Divider />
            <Typography component={Link} to="/order-history" style={{ textDecoration: 'none', color: '#3f51b5' }}>
              <ListItemText
                primary="Order History"
                secondary="View your order history."
              />
            </Typography>
            <Divider />
            <Typography component={Link} to="/order-tracking" style={{ textDecoration: 'none', color: '#3f51b5' }}>
              <ListItemText
                primary="Order Tracking"
                secondary="Track the status of your orders."
              />
            </Typography>
            <Divider />
            <Typography component={Link} to="/returns" style={{ textDecoration: 'none', color: '#3f51b5' }}>
              <ListItemText
                primary="Returns"
                secondary="Request returns for your orders."
              />
            </Typography>
            <Divider />
          </Box>
        </Card>
        <Button
          variant="contained"
          component={Link}
          to="/logout"
          color="primary"
        >
          Logout
        </Button>
      </StyledContainer>
    </motion.div>
  );
};

export default UserDashboard;
