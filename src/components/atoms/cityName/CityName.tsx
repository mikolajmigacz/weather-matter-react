import { StyledCityName } from './CityName.styles';
import { CityNameProps } from './CityName.types';

export const CityName = ({ name, fontSize }: CityNameProps) => (
  <StyledCityName fontSize={fontSize}>{name}</StyledCityName>
);
