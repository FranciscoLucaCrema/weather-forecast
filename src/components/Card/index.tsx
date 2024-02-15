//import "./CardModule.scss";
import { ITest } from "../../models/ITest";
import styles from "./Card.module.scss";

/* Llega data como prop de App.tsx, y muestra los datos del json */

function Card({ data }: { data: ITest }) {
  const { location, current } = data;

  return (
    <div className={styles.info_container}>
      <div className={styles.buscar}>
        <input type="text" placeholder="Name city" />
        <button type="submit">Buscar</button>
      </div>

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
