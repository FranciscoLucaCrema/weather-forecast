//import "./CardModule.scss";
import styles from "./Card.module.scss";

interface ITest {
  location: ILocation;
  current: ICurrent;
}

interface ILocation {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

interface ICurrent {
  temp_c: number;
  condition: ICondition;
  wind_dir: string;
}

interface ICondition {
  text: string;
  icon: string;
  code: number;
}

/* Llega data como prop de App.tsx, y muestra los datos del json */

function Card({ data }: { data: ITest }) {
  const { location, current } = data;

  return (
    <div className={styles.info_container}>
      <div className={styles.info_region}>
        <ul className={styles.region_ul}>
          <li className={styles.list}>
            <div className={styles.list_location}>
              <h2>
                Tiempo en {location.name} - {location.region}
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
    </div>
  );
}

export default Card;
