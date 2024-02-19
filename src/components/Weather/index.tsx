import { useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { ITest } from "../../models/ITest";
import Card from "../Card";

function Weather() {
  const [searchResults, setSearchResults] = useState<ITest | null>(null);
  const [value, setValue] = useState("");

  const fetchData = async (name: string) => {
    const URL = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}&q=${name}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setSearchResults(data);
  };

  const handleClick = () => {
    fetchData(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form>
        <Input handleChange={handleChange} />
        {/* <input type="text" placeholder="Name city" onChange={handleChange} /> */}
        <Button handleClick={handleClick} />
        {/*  <button type="submit" onClick={handleClick}>
          Buscar
        </button> */}
      </form>
      {searchResults && <Card data={searchResults} />}
    </>
  );
}

export default Weather;
