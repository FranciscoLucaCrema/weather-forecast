import { useState } from "react";
import { IForecastDay, IInformation } from "@/models/IInformation";
import CardPrimary from "@/components/Cards/CardPrimary";
import InputContainer from "./InputContainer";
import Loader from "@/components/Shared/Loader";
import styles from "./Weather.module.scss";
import WeatherService from "@/services/WeatherService";
import Forecast from "@/components/Shared/Forecast";
import "@/App.scss";

function Weather() {
  const [searchResults, setSearchResults] = useState<IInformation | null>(null);
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mock, setMock] = useState<IForecastDay[] | null>(null);
  const apiMaxDays = process.env.MAX_API_FORECAST_DAYS;

  const fetchData = async (city: string, days: number) => {
    setLoading(true);

    const weatherService = new WeatherService();
    const response = await weatherService.getWeather(city);
    const mockData = await weatherService.getMockDays(days);

    if (!response) {
      setErrorMessage(new Error("Your search didn't throw any results"));
      setSearchResults(null);
      setLoading(false);
    } else {
      setSearchResults(response);
      setErrorMessage(null);
      setLoading(false);
    }

    if (!mockData) {
      setMock(null);
    } else {
      setMock(mockData);
    }
  };

  return (
    <div className={styles.main}>
      <InputContainer
        fetchData={fetchData}
        apiMaxDays={apiMaxDays ? parseInt(apiMaxDays) : 8}
      />
      {searchResults && !loading && (
        <div className={styles.cards}>
          <CardPrimary data={searchResults} />
          {mock && mock.length > 0 && (
            <div className={styles.carouselWrapper}>
              <Forecast data={mock} />
            </div>
          )}
        </div>
      )}
      {errorMessage && <p className={styles.noData}>{errorMessage.message}</p>}
      {loading && <Loader />}
    </div>
  );
}

export default Weather;
