import {
  List,
  ListItem,
  Box,
  IconButton,
  Collapse,
  Button,
  Alert,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { fetchSensors } from "../../store/sensors/action";
import { buttonStyles, container, listItemStyles, listStyles } from "./style";
import SensorDetails from "../SensorDetails/SensorDetails";

const SensorTable: React.FC = () => {
  const { sensors } = useAppSelector((state) => state.sensorReducer);
  const dispatch = useAppDispatch();
  const [openSensors, setOpenSensors] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchSensors());
  }, [dispatch]);

  const handleIconClick = (mac: string) => {
    setOpenSensors((prevOpenSensors) =>
      prevOpenSensors.includes(mac)
        ? prevOpenSensors.filter((openMac) => openMac !== mac)
        : [...prevOpenSensors, mac]
    );
  };

  return (
    <List sx={listStyles}>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Button sx={buttonStyles}>Add new sensor</Button>
      </Box>
      {sensors &&
        sensors.map((sensor) => (
          <ListItem key={sensor.mac} sx={listItemStyles}>
            <Box sx={{ fontWeight: "500" }}>{sensor.name}</Box>
            <Box sx={container}>
              <Alert
                severity={sensor.status === "working" ? "success" : "error"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "90px",
                }}
              >
                {sensor.status}
              </Alert>
              <IconButton onClick={() => handleIconClick(sensor.mac)}>
                <KeyboardArrowDownIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <Collapse
                in={openSensors.includes(sensor.mac)}
                timeout="auto"
                unmountOnExit
              >
                <SensorDetails ip={sensor.ip} mac={sensor.mac} />
              </Collapse>
            </Box>
          </ListItem>
        ))}
    </List>
  );
};

export default SensorTable;
