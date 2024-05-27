import React, { useState } from "react";
import { Menu, MenuItem, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import useBreakpoints from "../../../hooks";
import { Link } from "@mui/material";
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSm } = useBreakpoints();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      {isSm ? (
        <>
          <IconButton onClick={handleMenuToggle}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Menu
            open={menuOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/#">HOME</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>PROUCTS</MenuItem>
            <MenuItem onClick={handleClose}>CONTACT US</MenuItem>
            <MenuItem onClick={handleClose}>ABOUT US</MenuItem>
          </Menu>
        </>
      ) : (
        <Box sx={{ display: "flex", flexGrow: 1, gap: 2 }}>
          <MenuItem onClick={handleClose}>
            <Link href="/#" underline="none">
              HOME
            </Link>
          </MenuItem>
          <MenuItem>PROUCTS</MenuItem>
          <MenuItem>CONTACT US</MenuItem>
          <MenuItem>ABOUT US</MenuItem>
          <Box sx={{ marginLeft: "auto", display: "flex", gap: 1 }}>
            <IconButton>
              <AddShoppingCartIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
