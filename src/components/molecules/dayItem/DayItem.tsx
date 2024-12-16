import React from 'react';

import { FontSizes } from '../../../constants/fontSizes';
import { useAppSelector } from '../../../store/hooks';
import { WeatherIcon } from '../../atoms/weatherIcon/WeatherIcon';

import { DayItemWrapper, DayLabel, IconWrapper, Temperature } from './DayItem.styles';
import { DayItemProps } from './DayItem.types';

const getDayOfWeekInPolish = (dateString: string): string => {
  const daysInPolish = ['Niedz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'];
  const [day, month] = dateString.split('.').map(Number);
  const currentYear = new Date().getFullYear();
  const date = new Date(currentYear, month - 1, day);
  const dayIndex = date.getDay();
  return daysInPolish[dayIndex];
};

export const DayItem: React.FC<DayItemProps> = ({ dayItem }) => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const { date, icon, iconPhrase, temperature } = dayItem;

  const dayOfWeek = getDayOfWeekInPolish(date);

  return (
    <DayItemWrapper isMobile={isMobile}>
      <DayLabel isMobile={isMobile}>{dayOfWeek}</DayLabel>
      <IconWrapper isMobile={isMobile}>
        <WeatherIcon iconNumber={icon} size={isMobile ? 40 : 80} />
        <span style={{ fontSize: isMobile ? FontSizes.h5.mobile : FontSizes.h5.web }}>
          {iconPhrase}
        </span>
      </IconWrapper>
      <Temperature isMobile={isMobile}>
        <span style={{ fontSize: isMobile ? FontSizes.h5.mobile : FontSizes.h4.web }}>
          {temperature.maximum + '°'}
        </span>
        <span
          style={{
            fontSize: isMobile ? FontSizes.h6.mobile : FontSizes.h6.web,
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          /{temperature.minimum + '°'}
        </span>
      </Temperature>
    </DayItemWrapper>
  );
};
