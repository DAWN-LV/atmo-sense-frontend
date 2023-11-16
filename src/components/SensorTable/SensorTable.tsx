import { useEffect, useState } from "react";
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
import { buttonStyles, container, listItemStyles, listStyles } from "@/components/SensorTable/styles";
import { createNewSensor } from "@/store/sensors/action";
import { fetchSensors } from "../../store/sensors/action";
import SensorDetails from "@/components/sensorDetails/SensorDetails";
import AddSensorModal from "../addSensorModal/SensorModal";
type NewSensor = Pick<ISensor, "ip" | "name">;

const SensorTable = () => {
  const { sensors } = useAppSelector((state) => state.sensorReducer);
  const dispatch = useAppDispatch();
  const [openSensors, setOpenSensors] = useState<string[]>([]);
  const [isAddSensorModalOpen, setAddSensorModalOpen] = useState(false);

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

  const handleOpenAddSensorModal = () => {
    setAddSensorModalOpen(true);
  };

  const handleCloseAddSensorModal = () => {
    setAddSensorModalOpen(false);
  };

  const handleAddSensor = (newSensorData: NewSensor) => {
    dispatch(createNewSensor(newSensorData));
  };

  return (
    <List sx={listStyles}>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Button sx={buttonStyles} onClick={handleOpenAddSensorModal}>
          Add new sensor
        </Button>
      </Box>

      {sensors && sensors.map((sensor) => (
          <ListItem key={sensor.ip} sx={listItemStyles}>
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

      <AddSensorModal
        open={isAddSensorModalOpen}
        onClose={handleCloseAddSensorModal}
        onAddSensor={handleAddSensor}
      />
    </List>
  );
};

export default SensorTable;
