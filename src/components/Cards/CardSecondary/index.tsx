import { IForecastDay } from "@/models/IInformation";
import styles from "./CardSecondary.module.scss";
import { formatDay } from "@/utils/DateFormat";

function CardSecondary({ data, index }: { data: IForecastDay; index: number }) {
  return (
    <section className={styles.info_subRegion}>
      <div className={styles.date}>
        <img src={data.day.condition.icon} alt="Icon" />
        <div className={styles.condition}>
          <span>Max:</span>
          <span>{data.day.maxtemp_c}°C</span>
        </div>
        <div className={styles.condition}>
          <span>Min:</span>
          <span>{data.day.mintemp_c}°C</span>
        </div>
        <p className={styles.condition}>{data.day.condition.text}</p>
      </div>

      <div className={styles.days}>
        <p>{index === 1 ? "Tomorrow" : formatDay(data.date, "long")}</p>
      </div>
    </section>
  );
}

export default CardSecondary;
