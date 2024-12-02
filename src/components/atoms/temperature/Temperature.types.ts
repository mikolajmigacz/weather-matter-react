export type TemperatureProps = {
  value: string;
  unit: string;
  fontSize?: number;
  color?: string;
};

export type StyleProps = Pick<TemperatureProps, 'fontSize' | 'color'>;
