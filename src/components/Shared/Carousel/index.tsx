import styles from "./carousel.module.scss";
import CardSecondary from "@/components/Cards/CardSecondary";
import { IForecastDay } from "@/models/IInformation";

function Carousel({ data }: { data: IForecastDay[] }) {
  return (
    <div className={styles.carousel}>
      {data.map((day, index) => {
        //ignore the first element of the forecastday array (today)
        if (index === 0) return;
        return <CardSecondary key={index} data={day} index={index} />;
      })}
    </div>
  );
}

export default Carousel;
