import { TemperatureWrapper } from './Temperature.styles';
import { TemperatureProps } from './Temperature.types';

export const Temperature = ({ value, unit, fontSize, color }: TemperatureProps) => (
  <TemperatureWrapper fontSize={fontSize} color={color}>
    {value} °{unit}
  </TemperatureWrapper>
);
