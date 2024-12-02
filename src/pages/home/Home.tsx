import { useEffect, useState } from 'react';

import { FavoriteCityWeather } from '../../components/organisms/favoriteCityWeather/FavoriteCityWeather';
import { CityService } from '../../services/cityInfo/cityInfo.service';
import { CityDetails } from '../../services/cityInfo/cityInfo.types';
import { CurrentConditions, WeatherService } from '../../services/currentConditions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setIsLoading } from '../../store/slices/uiSlice';

import { Container, ErrorText, LoadingText } from './Home.styles';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);
  const [cityDetails, setCityDetails] = useState<CityDetails | null>(null);
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userData.favoriteCity) {
        dispatch(setIsLoading(false));
        return;
      }

      dispatch(setIsLoading(true));

      try {
        const details = await CityService.getCityDetails(userData.favoriteCity);
        if (!details) {
          setError('Nie udało się pobrać szczegółów miasta');
          return;
        }

        setCityDetails(details);

        const conditions = await WeatherService.getCurrentConditions(details.key);
        setCurrentConditions(conditions);
      } catch (err) {
        setError('Wystąpił błąd podczas pobierania danych');
        console.error(err);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  }, [userData.favoriteCity, dispatch]);

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  if (!userData.favoriteCity || !cityDetails || !currentConditions) {
    return <LoadingText>Brak danych miasta</LoadingText>;
  }

  return (
    <Container>
      <FavoriteCityWeather
        cityName={cityDetails.localizedName}
        currentConditions={currentConditions}
      />
    </Container>
  );
};
