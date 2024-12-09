import React from 'react';

import { useAppSelector } from '../../../store/hooks';
import { DayItem } from '../../molecules/dayItem/DayItem';

import { List, Title, Wrapper, ListItemWrapper } from './DailyForecast.styles';
import { DailyForecastProps } from './DailyForecast.types';

export const DailyForecast: React.FC<DailyForecastProps> = ({ daysForecast }) => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  return (
    <Wrapper isMobile={isMobile}>
      <Title isMobile={isMobile}>Prognoza 7-dniowa</Title>
      <List>
        {daysForecast.map((forecast, index) => (
          <ListItemWrapper key={index} isLast={index === daysForecast.length - 1}>
            <DayItem dayItem={forecast} />
          </ListItemWrapper>
        ))}
      </List>
    </Wrapper>
  );
};
