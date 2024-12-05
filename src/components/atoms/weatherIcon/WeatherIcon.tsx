import { StyledImage } from './WeatherIcon.styles';
import { WeatherIconProps } from './WeatherIcon.types';

export const WeatherIcon = ({ iconNumber, size = 150 }: WeatherIconProps) => {
  const formattedIconNumber = iconNumber < 10 ? `0${iconNumber}` : iconNumber;

  return (
    <StyledImage
      src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${formattedIconNumber}-s.png`}
      alt="Weather icon"
      size={size}
    />
  );
};
