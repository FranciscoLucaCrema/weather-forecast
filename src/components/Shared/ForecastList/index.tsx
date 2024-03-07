import { IForecastDay } from "@/models/IInformation";
import styles from "./ForecastList.module.scss";
import { formatDay } from "@/utils/DateFormat";

function ListItem({ data }: { data: IForecastDay }) {
  return (
    <li className={styles.forecastContainer}>
      <div className={styles.forecastContainer_cards}>
        <img
          className={styles.forecastContainer_cards_img}
          src={data.day.condition.icon}
          alt="Icon"
        />
        <div className={styles.forecastContainer_cards_maxMin}>
          <div className={styles.forecastContainer_cards_maxMin_max}>
            <span>Max:</span>
            <span>{data.day.maxtemp_c}°C</span>
          </div>
          <div className={styles.forecastContainer_cards_maxMin_min}>
            <span>Min:</span>
            <span>{data.day.mintemp_c}°C</span>
          </div>
        </div>
        <p className={styles.forecastContainer_cards_clime}>
          {data.day.condition.text}
        </p>

        <p>{formatDay(data.date, "long")}</p>
      </div>
    </li>
  );
}

export default ListItem;
