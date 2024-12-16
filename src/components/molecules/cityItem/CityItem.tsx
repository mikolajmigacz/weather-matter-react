import React, { useEffect, useState } from 'react';

import { FontSizes } from '../../../constants/fontSizes';
import { FlagsService } from '../../../services/flags/flags.service';
import { useAppSelector } from '../../../store/hooks';

import {
  CityItemContainer,
  FlagImage,
  TextContainer,
  CityName,
  CountryName,
} from './CityItem.styles';
import { CityItemProps } from './CityItem.types';

export const CityItem: React.FC<CityItemProps> = ({ city, handleCitySelect }) => {
  const [flagUrl, setFlagUrl] = useState<string | null>(null);
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const fontSize = isMobile ? FontSizes.body.mobile : FontSizes.body.web;

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const flag = await FlagsService.getFlag(city.country.id);
        if (flag) setFlagUrl(flag.flagUrl);
      } catch (error) {
        console.error('Failed to fetch flag:', error);
      }
    };
    fetchFlag();
  }, [city.country.id]);

  return (
    <CityItemContainer onClick={() => handleCitySelect(city)}>
      {flagUrl && <FlagImage src={flagUrl} alt={`${city.country.name} flag`} />}
      <TextContainer>
        <CityName fontSize={fontSize}>{city.localizedName}</CityName>
        <CountryName fontSize={fontSize}>
          {city.country.name}, {city.administrativeArea.name}
        </CountryName>
      </TextContainer>
    </CityItemContainer>
  );
};
