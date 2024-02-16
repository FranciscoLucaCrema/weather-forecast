import { useEffect, useState } from "react";
import { ITest } from "../../models/ITest";
import styles from "./Card.module.scss";
import Loader from "./Loader";

/* Llega data como prop de App.tsx, y muestra los datos del json */

function Card({ data }: { data: ITest }) {
  /* const [searchResults, setSearchResults] = useState("rosario"); */
  const [loader, setLoader] = useState(true);
  /* const [value, setValue] = useState(""); */
  const { location, current } = data;

  /*  const URL = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}&q=rosario&aqi=no`; */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    /* setSearch(e.target.value); */
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.info_container}>
      <form className={styles.buscar}>
        <input type="text" placeholder="Name city" onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>

      {loader ? (
        <Loader />
      ) : (
        <div className={styles.info_region}>
          <ul className={styles.region_ul}>
            <li className={styles.list}>
              <div className={styles.list_location}>
                <h2>
                  Tiempo en{" "}
                  <span className={styles.span}>{location.name} </span> -{" "}
                  <span className={styles.span}>{location.region} </span>!
                </h2>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.temperature}>
                <img src={current.condition.icon} alt="icon" />
                <p>{current.temp_c}°C</p>
              </div>
            </li>
            <li className={styles.list}>
              <p>{current.condition.text}</p>
            </li>
            <li className={styles.list}>
              <p>{location.localtime}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Card;
