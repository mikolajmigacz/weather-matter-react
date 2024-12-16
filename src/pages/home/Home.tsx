import { useEffect, useState } from 'react';

import { CurrentWeatherInfo } from '../../components/organisms/currentWeatherInfo/CurrentWeatherInfo';
import { DailyForecast } from '../../components/organisms/dailyForecast/DailyForecast';
import { FavoriteCityWeather } from '../../components/organisms/favoriteCityWeather/FavoriteCityWeather';
import { HourlyForecast } from '../../components/organisms/hourlyForecast/HourlyForecast';
import { CityService } from '../../services/cityInfo/cityInfo.service';
import { CityDetails } from '../../services/cityInfo/cityInfo.types';
import { CurrentConditions, WeatherService } from '../../services/currentConditions';
import { FavoriteCityService } from '../../services/favoriteCities/favoriteCities.service';
import { FiveDaysForecastService } from '../../services/fiveDaysForecast/fiveDaysForecast.service';
import { DayForecast } from '../../services/fiveDaysForecast/fiveDaysForecast.types';
import { TwelveHoursForecastService } from '../../services/twelveHoursForecast/twelveHoursForecast.service';
import { HourForecast } from '../../services/twelveHoursForecast/twelveHoursForecast.types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setIsLoading } from '../../store/slices/uiSlice';
import { setFavoriteCities } from '../../store/slices/userSlice';

import { LeftColumn, RightColumn, ErrorText, LoadingText, MainContainer } from './Home.styles';

export const HomePage = () => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);
  const [cityDetails, setCityDetails] = useState<CityDetails | null>(null);
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions | null>(null);
  const [hourlyForecasts, setHourlyForecasts] = useState<HourForecast[] | null>(null);
  const [fiveDaysForecast, setFiveDaysForecast] = useState<DayForecast[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavoriteCities = async () => {
      dispatch(setIsLoading(true));

      try {
        const response = await FavoriteCityService.getFavoriteCities(userData.userId || '');
        if (response.success && response.cities) {
          dispatch(setFavoriteCities(response.cities));
        } else {
          console.warn('No favorite cities found or failed to fetch favorite cities');
        }
      } catch (err) {
        console.error('Error fetching favorite cities:', err);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchFavoriteCities();
  }, [dispatch, userData.userId]);

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

        const fiveDayForecasts = await FiveDaysForecastService.getFiveDaysForecast(details.key);
        setFiveDaysForecast(fiveDayForecasts);
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

  if (
    !userData.favoriteCity ||
    !cityDetails ||
    !currentConditions ||
    !hourlyForecasts ||
    !fiveDaysForecast
  ) {
    return <LoadingText isMobile={isMobile}>Brak danych miasta</LoadingText>;
  }

  return (
    <MainContainer isMobile={isMobile}>
      <LeftColumn isMobile={isMobile}>
        <FavoriteCityWeather
          cityName={cityDetails.localizedName}
          currentConditions={currentConditions}
        />
        <HourlyForecast forecasts={hourlyForecasts} />
        <CurrentWeatherInfo currentConditions={currentConditions} />
        {isMobile && <DailyForecast daysForecast={fiveDaysForecast} />}
      </LeftColumn>
      {!isMobile && (
        <RightColumn>
          <DailyForecast daysForecast={fiveDaysForecast} />
        </RightColumn>
      )}
    </MainContainer>
  );
};
