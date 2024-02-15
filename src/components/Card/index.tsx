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
  is_day: number;
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
  /* is_day se crea la constante para cambiar su valor de 0 o 1 a si es de Dia o Noche */
  const { is_day } = current;
  return (
    <div className={styles.info_container}>
      <div className={styles.info_region}>
        <ul className={styles.region_ul}>
          <li className={styles.list}>
            <h2>{location.name}</h2>
          </li>
          <li className={styles.list}>
            <h3>{location.region}</h3>
          </li>
          <li className={styles.list}>
            <h3>{location.country}</h3>
          </li>
          <li className={styles.list}>
            <p>{location.localtime}</p>
          </li>
        </ul>
      </div>

      <div className={styles.info_weather}>
        <ul className={styles.region_ul}>
          <li className={styles.list}>
            <p>{current.temp_c}°C</p>
          </li>
          <li className={styles.list}>
            <p>{current.condition.text}</p>
          </li>
          <li className={styles.list}>
            <img src={current.condition.icon} alt="icon" />
          </li>
          <li className={styles.list}>
            <span>{is_day === 0 ? "Night!" : "Day!"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
