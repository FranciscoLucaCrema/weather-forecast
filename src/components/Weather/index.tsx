import { useState } from "react";
import { IInformation } from "@/models/IInformation";
import Card from "@/components/Card";
import InputContainer from "./InputContainer";

function Weather() {
  const [searchResults, setSearchResults] = useState<IInformation | null>(null);

  const fetchData = async (city: string) => {
    const URL = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}&q=${city}`;
    const response = await fetch(URL);
    /* console.log(response); */
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    /*  console.log(data); */
    setSearchResults(data);
  };

  return (
    <>
      <InputContainer fetchData={fetchData} />
      <Card data={searchResults} />
    </>
  );
}

export default Weather;
