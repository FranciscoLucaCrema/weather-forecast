import { IInformation } from "@/models/IInformation";
import styles from "./Card.module.scss";
import Loader from "@/components/Card/Loader";
/* import Loader from "./Loader"; */

/* Llega data como prop de App.tsx, y muestra los datos del json */

function Card({
  data,
  loading,
}: {
  data: IInformation | null;
  loading: boolean;
}) {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_region}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {data ? (
              <ul className={styles.region_ul}>
                <li className={styles.list}>
                  <div className={styles.list_location}>
                    <h2>
                      Tiempo en{" "}
                      <span className={styles.span}>{data.location.name} </span>{" "}
                      -{" "}
                      <span className={styles.span}>
                        {data.location.country}{" "}
                      </span>
                      !
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
              <p className={styles.noData}>
                No se encuentra el valor solicitado
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
