import { useState } from "react";
import { IInformation } from "@/models/IInformation";
import Card from "@/components/Card";
import InputContainer from "./InputContainer";

function Weather() {
  const [searchResults, setSearchResults] = useState<IInformation | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (city: string) => {
    setLoading(true);
    const URL = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}&q=${city}`;
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
    <>
      <InputContainer fetchData={fetchData} />
      <Card data={searchResults} loading={loading} />
    </>
  );
}

export default Weather;
