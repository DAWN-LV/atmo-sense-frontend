import React from "react";
import { Box, ListItem } from "@mui/material";

interface SensorDetailsProps {
  ip: string;
  mac: string;
}

const SensorDetails: React.FC<SensorDetailsProps> = ({ ip, mac }) => (
  <ListItem>
    <Box sx={{display:"flex", flexDirection:"column", gap:"5px"}}>
    <Box sx={{fontSize:"18px"}}><strong>IP:</strong> {ip}</Box>
    <Box sx={{fontSize:"18px"}}><strong>MAC:</strong> {mac}</Box>
    </Box>
  </ListItem>
);

export default SensorDetails;
