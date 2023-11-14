import {
  SensorProps,
  calculatedDataProps,
  dataProps,
} from "../../../models/sensorProps";

export const getSensors = async (): Promise<SensorProps[]> => {
  const response = await fetch("http://40.68.14.121:3000/api/sensors", {
    method: "GET",
  });
  const data = await response.json();
  return data.map((props: SensorProps) => ({
    ip: props.ip,
    mac: props.mac,
    name: props.name,
    threshold: props.threshold,
    status: props.status,
    setup_timing: props.setup_timing,
    calculated_data: props.calculated_data.map(
      (calculatedData: calculatedDataProps) => ({
        value: calculatedData.value,
        epoch: calculatedData.epoch,
      })
    ),
    data: props.data.map((dataItem: dataProps) => ({
      value: dataItem.value,
      epoch: dataItem.epoch,
    })),
  }));
};
