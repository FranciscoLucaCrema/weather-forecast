import { IForecastDay } from "@/models/IInformation";
import styles from "./CardSecondary.module.scss";
import formatDate from "@/utils/formatISOUTCDate";

function CardSecondary({ data }: { data: IForecastDay }) {
  return (
    <section className={styles.info_subRegion}>
      <div className={styles.date}>
        <img src={data.day.condition.icon} alt="Icon" />
        <p>Max: {data.day.maxtemp_c}°C</p>
        <p>Min: {data.day.mintemp_c}°C</p>
        <p className={styles.condition}>{data.day.condition.text}</p>
      </div>

      <div className={styles.days}>
        <p>{formatDate(data.date)}</p>
      </div>
    </section>
  );
}

export default CardSecondary;
