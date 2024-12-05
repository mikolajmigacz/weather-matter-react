import { useEffect, useState } from 'react';

import { FavoriteCityWeather } from '../../components/organisms/favoriteCityWeather/FavoriteCityWeather';
import { HourlyForecast } from '../../components/organisms/hourlyForecast/HourlyForecast';
import { CityService } from '../../services/cityInfo/cityInfo.service';
import { CityDetails } from '../../services/cityInfo/cityInfo.types';
import { CurrentConditions, WeatherService } from '../../services/currentConditions';
import { TwelveHoursForecastService } from '../../services/twelveHoursForecast/twelveHoursForecast.service';
import { HourForecast } from '../../services/twelveHoursForecast/twelveHoursForecast.types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setIsLoading } from '../../store/slices/uiSlice';

import { Container, ErrorText, LoadingText } from './Home.styles';

export const HomePage = () => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);
  const [cityDetails, setCityDetails] = useState<CityDetails | null>(null);
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions | null>(null);
  const [hourlyForecasts, setHourlyForecasts] = useState<HourForecast[] | null>(null);
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

        const forecasts = await TwelveHoursForecastService.getTwelveHoursForecast(details.key);
        setHourlyForecasts(forecasts);
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
    return <ErrorText isMobile={isMobile}>{error}</ErrorText>;
  }

  if (!userData.favoriteCity || !cityDetails || !currentConditions || !hourlyForecasts) {
    return <LoadingText isMobile={isMobile}>Brak danych miasta</LoadingText>;
  }

  return (
    <Container isMobile={isMobile}>
      <FavoriteCityWeather
        cityName={cityDetails.localizedName}
        currentConditions={currentConditions}
      />
      <HourlyForecast forecasts={hourlyForecasts} />
    </Container>
  );
};
