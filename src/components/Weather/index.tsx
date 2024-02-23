import { useState } from "react";
import { IInformation } from "@/models/IInformation";
import CardPrimary from "@/components/Cards/CardPrimary";
import CardSecondary from "@/components/Cards/CardSecondary";
import InputContainer from "./InputContainer";
import Loader from "@/components/Shared/Loader";
import styles from "./Weather.module.scss";
import "@/App.scss";

function Weather() {
  const [searchResults, setSearchResults] = useState<IInformation | null>(null);
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (city: string) => {
    setLoading(true);
    /* maximum number of days allowed to show the API*/
    const days = 4;
    const URL = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}&q=${city}&days=${days}`;
    return await fetch(URL).then(async (res) => {
      setLoading(false);
      const jsonResponse = await res.json();
      if (!res.ok) {
        setErrorMessage(new Error("Your search didn't throw any results"));
        setSearchResults(null);
      } else {
        setSearchResults(jsonResponse);
        setErrorMessage(null);
      }
    });
  };

  return (
    <div className={styles.main}>
      <InputContainer fetchData={fetchData} />
      {searchResults && !loading && (
        <div className={styles.cards}>
          <CardPrimary data={searchResults} />
          <div className={styles.cardSecondary}>
            {searchResults.forecast.forecastday.map((day, index) => {
              //ignore the first element of the forecastday array (today)
              if (index === 0) return;
              return <CardSecondary key={index} data={day} />;
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
