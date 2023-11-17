import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import logo from "../../assets/Logo.png";
import { burgerIconStyles, headerStyles } from "@/components/Header/styles";
import DrawerMenu from "../drawer/Drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = React.memo(() => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const homeNavigation = useNavigate();

  const handleToggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  const navigateTo = (path: string) => {
    homeNavigation(path);
  };
  return (
    <Box sx={headerStyles}>
      <IconButton sx={burgerIconStyles} onClick={handleToggleDrawer}>
        <MenuIcon sx={{ fontSize: "40px", color: "#fff" }} />
      </IconButton>
      <img
        src={logo}
        onClick={() => navigateTo("/home")}
        style={{ cursor: "pointer" }}
      />
      <DrawerMenu
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      />
    </Box>
  );
});

export default Header;
