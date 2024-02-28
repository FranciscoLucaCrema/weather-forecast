import { useState } from "react";
import { IForecastDay, IInformation } from "@/models/IInformation";
import CardPrimary from "@/components/Cards/CardPrimary";
import InputContainer from "./InputContainer";
import Loader from "@/components/Shared/Loader";
import styles from "./Weather.module.scss";
import WeatherService from "@/services/WeatherService";
import Carousel from "@/components/Shared/Carousel";
import "@/App.scss";

function Weather() {
  const [searchResults, setSearchResults] = useState<IInformation | null>(null);
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mock, setMock] = useState<IForecastDay[] | undefined>();

  const fetchData = async (city: string) => {
    setLoading(true);

    const weatherService = new WeatherService();
    const response = await weatherService.getWeather(city);
    const mockData = await weatherService.getMockDays();
    console.log("mockData: ", mockData);
    setLoading(false);

    if (!response) {
      setErrorMessage(new Error("Your search didn't throw any results"));
      setSearchResults(null);
    } else {
      setSearchResults(response);
      setErrorMessage(null);
    }
    if (!mockData) {
      setErrorMessage(new Error("Mock error"));
      setMock(undefined);
    } else {
      setErrorMessage(null);
      setMock(mockData);
    }
  };

  return (
    <div className={styles.main}>
      <InputContainer fetchData={fetchData} />
      {searchResults && !loading && (
        <div className={styles.cards}>
          <CardPrimary data={searchResults} />
          {mock && (
            <div className={styles.carousel}>
              <Carousel data={mock} />
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
