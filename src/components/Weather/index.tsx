import { useState } from "react";
import { IInformation } from "@/models/IInformation";
import CardPrimary from "@/components/Cards/CardPrimary";
import CardSecondary from "@/components/Cards/CardSecondary";
import InputContainer from "./InputContainer";
import Loader from "@/components/Shared/Loader";
import styles from "./Weather.module.scss";
import "@/App.scss";
import WeatherService from "@/services/WeatherService";

function Weather() {
  const [searchResults, setSearchResults] = useState<IInformation | null>(null);
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (city: string, days: number) => {
    setLoading(true);
    /* maximum number of days allowed to show the API*/

    const weatherService = new WeatherService();
    const response = await weatherService.getWeather(city, days);
    setLoading(false);

    if (!response) {
      setErrorMessage(new Error("Your search didn't throw any results"));
      setSearchResults(null);
    } else {
      setSearchResults(response);
      setErrorMessage(null);
    }
  };

  return (
    <div className={styles.main}>
      <InputContainer fetchData={fetchData} />
      {searchResults && !loading && (
        <div className={styles.cards}>
          <CardPrimary data={searchResults} />
          <div className={styles.cardSecondary}>
            {searchResults.forecast.forecastday.length > 1 &&
              searchResults.forecast.forecastday.map((day, index) => {
                //ignore the first element of the forecastday array (today)
                if (index === 0) return;
                return <CardSecondary key={index} data={day} index={index} />;
              })}
          </div>
        </div>
      )}
      {errorMessage && <p className={styles.noData}>{errorMessage.message}</p>}
      {loading && <Loader />}
    </div>
  );
}

export default Weather;
