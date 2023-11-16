import React, { useState, ChangeEvent } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface AddSensorModalProps {
  open: boolean;
  onClose: () => void;
  onAddSensor: (data: { ip: string; name: string }) => void;
}

const AddSensorModal: React.FC<AddSensorModalProps> = ({
  open,
  onClose,
  onAddSensor,
}) => {
  const [newSensorData, setNewSensorData] = useState({
    ip: "",
    name: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSensorData({
      ...newSensorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSensor = () => {
    const createdSensor = {
      ip: newSensorData.ip,
      name: newSensorData.name,
    };

    onAddSensor(createdSensor);

    setNewSensorData({
      ip: "",
      name: "",
    });
    onClose();
  };

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 35,
          p: 4,
          width: 600,
          border: "1px solid #808080",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add New Sensor
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ fontSize: "30px", color: "#808080" }} />
          </IconButton>
        </Box>
        <TextField
          label="Sensor Name"
          name="name"
          value={newSensorData.name}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
          sx={{ color: "#808080" }}
        />
        <TextField
          label="IP Address"
          name="ip"
          value={newSensorData.ip}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
          sx={{ color: "#808080" }}
        />
        <Button
          onClick={handleAddSensor}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Add Sensor
        </Button>
      </Box>
    </Modal>
  );
};

export default AddSensorModal;
