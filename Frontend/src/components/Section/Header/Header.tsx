import React, { useState } from "react";
import { Menu, MenuItem, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import useBreakpoints from "../../../hooks";
import SearchBar from "../Searchbar/SearchBar";
import Logo from "../../Loader.svg";
import CustomLink from "../CustomLink/Links";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSm } = useBreakpoints();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleAddToCart = () => {
    console.log("Item added to cart");
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
      <Box>
        <img src={Logo} alt="Logo" style={{ height: 40 }} />
      </Box>
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
              <CustomLink href="/home">HOME</CustomLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <CustomLink href="/home/products">PRODUCTS</CustomLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <CustomLink href="/home/contactUs">CONTACT US</CustomLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <CustomLink href="/home/aboutUs">ABOUT US</CustomLink>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box sx={{ display: "flex", flexGrow: 1, gap: 2 }}>
          <MenuItem onClick={handleClose}>
            <CustomLink href="/home">HOME</CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink href="/home/products">
              <Typography variant="body1" color="inherit">
                PRODUCTS
              </Typography>
            </CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink href="/home/contactUs">
              <Typography variant="body1" color="inherit">
                CONTACT US
              </Typography>
            </CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink href="/home/aboutUs">
              <Typography variant="body1" color="inherit">
                ABOUT US
              </Typography>
            </CustomLink>
          </MenuItem>
          <Box sx={{ marginLeft: "auto", display: "flex", gap: 1 }}>
            <IconButton>
              <AddShoppingCartIcon />
            </IconButton>
            <SearchBar />
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
