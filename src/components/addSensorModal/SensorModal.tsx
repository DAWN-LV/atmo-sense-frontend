import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import { container, modalWindowStyles } from "./styles";

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
  const formik = useFormik({
    initialValues: {
      ip: "",
      name: "",
    },
    validationSchema: Yup.object({
      ip: Yup.string().required("IP Address is required"),
      name: Yup.string().required("Sensor Name is required"),
    }),
    onSubmit: (values) => {
      onAddSensor(values);
      formik.resetForm();
      onClose();
    },
  });

  return (
    <Modal open={open}>
      <Box sx={modalWindowStyles}>
        <Box sx={container}>
          <Typography variant="h6" gutterBottom>
            Add New Sensor
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ fontSize: "30px", color: "#808080" }} />
          </IconButton>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Sensor Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
            fullWidth
            sx={{ color: "#808080" }}
          />
          <TextField
            label="IP Address"
            name="ip"
            value={formik.values.ip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ip && Boolean(formik.errors.ip)}
            helperText={formik.touched.ip && formik.errors.ip}
            margin="normal"
            fullWidth
            sx={{ color: "#808080" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Add Sensor
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddSensorModal;
