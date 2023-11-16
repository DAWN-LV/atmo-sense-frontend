import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import logo from "../../assets/Logo.svg"
import { burgerIconStyles, headerStyles, imgStyles } from "@/components/Header/styles";

const Header = () => {
  return (
    <Box
      sx={headerStyles}
    >
      <IconButton
        sx={burgerIconStyles}
      >
        <MenuIcon sx={{ fontSize: "40px", color: "#fff" }} />
      </IconButton>
      <img src={logo} style={imgStyles}/>
    </Box>
  );
};

export default Header;
