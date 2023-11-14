import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect } from "react";
import { fetchSensors } from "../../../store/sensors/action";

const SensorTable: React.FC = () => {
  const { sensors } = useAppSelector((state) => state.sensorReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSensors());
  }, [dispatch]);
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>IP</TableCell>
            <TableCell>MAC</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Threshold</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Setup Timing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sensors.map((sensor) => (
            <TableRow key={sensor.mac}>
              <TableCell>{sensor.ip}</TableCell>
              <TableCell>{sensor.mac}</TableCell>
              <TableCell>{sensor.name}</TableCell>
              <TableCell>{sensor.threshold}</TableCell>
              <TableCell>{sensor.status}</TableCell>
              <TableCell>{sensor.setup_timing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SensorTable;
