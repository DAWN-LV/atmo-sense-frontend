import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import { burgerIconStyles, headerStyles, imgStyles } from "./styles";
import logo from "../../assets/Logo.svg"

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
