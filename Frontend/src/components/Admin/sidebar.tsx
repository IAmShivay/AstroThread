import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  Store,
  People,
  BarChart,
} from "@mui/icons-material";
import { motion } from "framer-motion";
const drawerWidth = 240;
const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#424242", // Change background color
          color: "#fff", // Change text color
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ backgroundColor: "#333" }}>
        {" "}
        {/* Change toolbar background color */}
        <Typography variant="h6" noWrap sx={{ color: "#fff" }}>
          {" "}
          {/* Change text color */}
          Admin Dashboard
        </Typography>
      </Toolbar>
      <Divider sx={{ backgroundColor: "#757575" }} />{" "}
      {/* Change divider color */}
      <List>
        {["Dashboard", "Orders", "Products", "Customers", "Reports"].map(
          (text, index) => (
            <motion.div
              key={text}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ListItem
                button
                style={{
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  color: "#fff",
                }}
              >
                <ListItemIcon>
                  {index === 0 && <Dashboard />}
                  {index === 1 && <ShoppingCart />}
                  {index === 2 && <Store />}
                  {index === 3 && <People />}
                  {index === 4 && <BarChart />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </motion.div>
          )
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
