import { useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { ITest } from "../../models/ITest";
import Card from "../Card";

function Weather() {
  const [searchResults, setSearchResults] = useState<ITest | null>(null);
  const [value, setValue] = useState("");

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

  const handleClick = async () => {
    await fetchData(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input handleChange={handleChange} />

      <Button handleClick={handleClick} />

      <Card data={searchResults} />
    </>
  );
}

export default Weather;
