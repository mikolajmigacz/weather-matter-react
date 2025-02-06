import React, { useEffect, useState } from 'react';

import { AppColors } from '../../../constants';
import { FlagsService } from '../../../services/flags/flags.service';
import { Flag } from '../../../services/flags/flags.types';
import { useAppSelector } from '../../../store/hooks';

import {
  CityImage,
  TextContainer,
  CityName,
  RegionCountry,
  DeleteButton,
  Container,
  Location,
  ModalOverlay,
  ModalButton,
  ModalButtonContainer,
  ModalContent,
  ModalText,
  ModalTitle,
} from './FavoriteItem.styles';
import { FavoriteCityItemProps } from './FavoriteItem.types';

export const FavoriteCityItem: React.FC<FavoriteCityItemProps> = ({ selectedCity, onDelete }) => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flagUrl, setFlagUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const flag: Flag | null = await FlagsService.getFlag(selectedCity.country.id);
        if (flag) setFlagUrl(flag.flagUrl);
      } catch (error) {
        console.error('Error fetching flag:', error);
      }
    };
    fetchFlag();
  }, [selectedCity.key]);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <CityImage
          isMobile={isMobile}
          src={flagUrl || 'https://via.placeholder.com/60'}
          alt="city flag"
        />
        <TextContainer>
          <CityName isMobile={isMobile}>{selectedCity.localizedName}</CityName>
          <RegionCountry isMobile={isMobile}>
            {selectedCity.country.localizedName}, {selectedCity.region.localizedName}
          </RegionCountry>
          <Location isMobile={isMobile}>
            Lokalizacja: {selectedCity.latitude}, {selectedCity.longitude}
          </Location>
        </TextContainer>
        <DeleteButton onClick={handleDeleteClick}>🗑️</DeleteButton>
      </Container>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Usuń miasto</ModalTitle>
            <ModalText>
              Czy napewno chcesz usunąć <strong>{selectedCity.localizedName}</strong> z ulubionych?
            </ModalText>
            <ModalButtonContainer>
              <ModalButton color="rgba(255, 255, 255, 0.6)" onClick={handleCloseModal}>
                Anuluj
              </ModalButton>
              <ModalButton color={AppColors.teal} onClick={handleConfirmDelete}>
                Usuń
              </ModalButton>
            </ModalButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
