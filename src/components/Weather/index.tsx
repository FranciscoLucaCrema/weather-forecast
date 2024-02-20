import { useState } from "react";
import { IInformation } from "@/models/IInformation";
import Card from "@/components/Card";
import InputContainer from "./InputContainer";
import Loader from "@/components/Shared/Loader";
import styles from "./Weather.module.scss";
import "@/App.scss";

function Weather() {
  const [searchResults, setSearchResults] = useState<IInformation | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (city: string) => {
    setLoading(true);
    /* maximum number of days allowed to show the API*/
    const days = 4;
    const URL = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}&q=${city}&days=${days}`;
    return await fetch(URL).then(async (res) => {
      setLoading(false);
      if (!res.ok) return null;
      else {
        const response = await res.json();
        setSearchResults(response);
      }
    });
  };

  return (
    <div className={styles.main}>
      <InputContainer fetchData={fetchData} />
      {searchResults && !loading && <Card data={searchResults} />}
      {loading && <Loader />}
    </div>
  );
}

export default Weather;
