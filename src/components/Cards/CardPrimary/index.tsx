import { IInformation } from "@/models/IInformation";
import styles from "./CardPrimary.module.scss";
import formatDate from "@/utils/formatISOUTCDate";

/* Llega data como prop de App.tsx, y muestra los datos del json */

function CardPrimary({ data }: { data: IInformation }) {
  return (
    <div className={styles.info_region}>
      <ul className={styles.region_ul}>
        <li className={styles.list}>
          <div className={styles.list_location}>
            <h2>
              Tiempo en{" "}
              <span className={styles.span}>{data.location.name} </span> -{" "}
              <span className={styles.span}>{data.location.country} </span>!
            </h2>
          </div>
        </li>
        <li className={styles.list}>
          <div className={styles.temperature}>
            <img src={data.current.condition.icon} alt="icon" />
            <p>{data.current.temp_c}°C</p>
          </div>
        </li>
        <li className={styles.list}>
          <p>{data.current.condition.text}</p>
        </li>
        <li className={styles.list}>
          <p>{formatDate(data.forecast.forecastday[0].date)}</p>
        </li>
      </ul>
    </div>
  );
}

export default CardPrimary;
