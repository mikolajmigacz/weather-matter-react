import React, { useMemo } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { AppColors } from '../../../constants';
import { FavoriteCityService } from '../../../services/favoriteCities/favoriteCities.service';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { addFavoriteCity, removeFavoriteCity } from '../../../store/slices/userSlice';

import {
  DetailsContainer,
  TopSection,
  WeatherIcon,
  CityName,
  SubInfo,
  InfoTable,
  InfoRow,
  CityInfo,
  Divider,
  LeftText,
  RightText,
  CityNameWrapper,
} from './CityDetails.styles';
import { CityDetailsProps } from './CityDetails.types';

export const CityDetails: React.FC<CityDetailsProps> = ({ selectedCity, cityConditions }) => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const favoriteCities = useAppSelector((state) => state.user.favoriteCities);
  const userId = useAppSelector((state) => state.user.userId);
  const dispatch = useAppDispatch();

  const isFavorite = useMemo(
    () => favoriteCities.some((city) => city.key === selectedCity?.key),
    [favoriteCities, selectedCity]
  );

  const toggleFavorite = async () => {
    if (!selectedCity) return;

    try {
      if (isFavorite) {
        await FavoriteCityService.removeFavoriteCity(userId || '', selectedCity.key);
        dispatch(removeFavoriteCity(selectedCity.key));
      } else {
        const response = await FavoriteCityService.addFavoriteCity(
          userId || '',
          selectedCity.localizedName
        );
        if (response.success && response.addedCity) {
          if (response.addedCity) {
            dispatch(addFavoriteCity(response.addedCity));
          }
        }
      }
    } catch (error) {
      console.error('Failed to toggle favorite city:', error);
    }
  };

  return (
    <DetailsContainer>
      <TopSection>
        <CityInfo>
          <CityNameWrapper>
            <CityName isMobile={isMobile}>{selectedCity?.localizedName}</CityName>
            {isFavorite ? (
              <FavoriteIcon
                style={{ color: AppColors.teal, cursor: 'pointer' }}
                onClick={toggleFavorite}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                style={{ color: AppColors.teal, cursor: 'pointer' }}
                onClick={toggleFavorite}
              />
            )}
          </CityNameWrapper>
          <SubInfo isMobile={isMobile}>
            {selectedCity?.country?.name}, {selectedCity?.administrativeArea?.name}
          </SubInfo>
        </CityInfo>
        <WeatherIcon
          src={`https://developer.accuweather.com/sites/default/files/${cityConditions?.weatherIcon
            .toString()
            .padStart(2, '0')}-s.png`}
          alt="Weather Icon"
        />
      </TopSection>
      <InfoTable>
        <InfoRow>
          <LeftText>Temperatura</LeftText>
          <RightText>
            {cityConditions?.temperature.value} {cityConditions?.temperature.unit}
          </RightText>
        </InfoRow>
        <Divider />
        <InfoRow>
          <LeftText>Wilgotność</LeftText>
          <RightText>{cityConditions?.relativeHumidity}%</RightText>
        </InfoRow>
        <Divider />
        <InfoRow>
          <LeftText>Prędkość wiatru</LeftText>
          <RightText>{cityConditions?.windSpeed} km/h</RightText>
        </InfoRow>
        <Divider />
        <InfoRow>
          <LeftText>UV Index</LeftText>
          <RightText>{cityConditions?.uvIndex}</RightText>
        </InfoRow>
      </InfoTable>
    </DetailsContainer>
  );
};
