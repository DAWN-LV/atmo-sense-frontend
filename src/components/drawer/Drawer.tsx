import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import { logoBackStyles, pageItemStyles } from "./styles";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerMenu: React.FC<DrawerProps> = (props) => {
  const { isOpen, onClose } = props;
  const pageNavigation = useNavigate();

  const navigateTo = (path: string) => {
    onClose();
    pageNavigation(path);
  };

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <Box sx={logoBackStyles}>
        <img src={logo} style={{ width: "156px", height: "96px" }} />
      </Box>
      <List sx={{ width: "250px", marginTop: "1rem" }}>
        <ListItem onClick={() => navigateTo("/home")} sx={pageItemStyles}>
          <HomeIcon />
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem onClick={() => navigateTo("/getStarted")} sx={pageItemStyles}>
          <PlayArrowIcon />
          <ListItemText primary="Get started" />
        </ListItem>
        <ListItem onClick={() => navigateTo("/AboutUs")} sx={pageItemStyles}>
          <InfoIcon />
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
