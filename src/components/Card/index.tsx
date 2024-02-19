import { ITest } from "../../models/ITest";
import styles from "./Card.module.scss";
/* import Loader from "./Loader"; */

/* Llega data como prop de App.tsx, y muestra los datos del json */

function Card({ data }: { data: ITest | null }) {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_region}>
        {data ? (
          <ul className={styles.region_ul}>
            <li className={styles.list}>
              <div className={styles.list_location}>
                <h2>
                  Tiempo en{" "}
                  <span className={styles.span}>{data.location.name} </span> -{" "}
                  <span className={styles.span}>{data.location.region} </span>!
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
              <p>{data.location.localtime}</p>
            </li>
          </ul>
        ) : (
          <p>No se encuentra el valor solicitado</p>
        )}
      </div>
    </div>
  );
}

export default Card;
