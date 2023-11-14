export type SensorProps = {
  ip: string;
  mac: string;
  name: string;
  threshold: number;
  status: string;
  setup_timing: number;
  calculated_data: calculatedDataProps[];
  data: dataProps[];
};

export type calculatedDataProps = {
  value: number;
  epoch: number;
};

export type dataProps = {
  value: number;
  epoch: number;
};
