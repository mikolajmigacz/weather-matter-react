import React, { useState, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { CityItem } from '../../components/molecules/cityItem/CityItem';
import { CityDetails } from '../../components/organisms/cityDetails/CityDetails';
import { AutocompleteService } from '../../services/autocomplete/autocomplete.service';
import { AutocompleteCity } from '../../services/autocomplete/autocomplete.types';
import { CurrentConditions, WeatherService } from '../../services/currentConditions';
import { useAppSelector } from '../../store/hooks';

import {
  MainContainer,
  ResultsContainer,
  SearchInput,
  EmptyStateContainer,
  LoupeIcon,
  EmptyStateText,
  ResultsWrapper,
  CityDetailsWrapper,
  ContentWrapper,
} from './Cities.styles';

/**
 * A page component that allows users to search for cities and view their current weather conditions.
 *
 * This component integrates an autocomplete service for city searches and fetches real-time weather
 * conditions for a selected city. It manages loading states, handles errors, and adapts its layout
 * for both mobile and desktop views.
 *
 * Users can search for a city using the input field, select a city from the results, and view its
 * detailed weather conditions.
 *
 * @returns {React.FC} The CitiesPage component.
 */

export const CitiesPage: React.FC = () => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<AutocompleteCity[] | null>(null);
  const [selectedCity, setSelectedCity] = useState<AutocompleteCity | null>(null);
  const [cityConditions, setCityConditions] = useState<CurrentConditions | null>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setSearchResults(null);
      setCityConditions(null);
      return;
    }

    const fetchAutocomplete = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const results = await AutocompleteService.fetchAutocomplete(query);
        setSearchResults(results);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    const debounce = setTimeout(fetchAutocomplete, 500);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleCitySelect = async (city: AutocompleteCity) => {
    setSelectedCity(city);
    setError(null);

    try {
      const conditions = await WeatherService.getCurrentConditions(city.key);
      setCityConditions(conditions);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const hasCityDetails = Boolean(selectedCity && cityConditions);

  return (
    <MainContainer isMobile={isMobile}>
      <SearchInput
        isMobile={isMobile}
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isLoading && <CircularProgress color="secondary" />}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ContentWrapper isMobile={isMobile}>
        <ResultsWrapper isMobile={isMobile} hasCityDetails={hasCityDetails}>
          {!searchResults && !selectedCity && (
            <EmptyStateContainer>
              <LoupeIcon />
              <EmptyStateText>Wpisz coś w pasku wyszukiwania aby znaleźć miasto</EmptyStateText>
            </EmptyStateContainer>
          )}

          {searchResults && (
            <ResultsContainer>
              {hasCityDetails && isMobile && (
                <CityDetailsWrapper isMobile={isMobile}>
                  <CityDetails selectedCity={selectedCity} cityConditions={cityConditions} />
                </CityDetailsWrapper>
              )}
              {searchResults.map((city) => (
                <CityItem key={city.key} city={city} handleCitySelect={handleCitySelect} />
              ))}
            </ResultsContainer>
          )}
        </ResultsWrapper>

        {hasCityDetails && !isMobile && (
          <CityDetailsWrapper isMobile={isMobile}>
            <CityDetails selectedCity={selectedCity} cityConditions={cityConditions} />
          </CityDetailsWrapper>
        )}
      </ContentWrapper>
    </MainContainer>
  );
};
