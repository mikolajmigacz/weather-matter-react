import { StyledCityName } from './CityName.styles';
import { CityNameProps } from './CityName.types';

export const CityName = ({ name }: CityNameProps) => <StyledCityName>{name}</StyledCityName>;
