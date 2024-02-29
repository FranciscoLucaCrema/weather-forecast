import { IForecastDay } from "@/models/IInformation";
import styles from "./carousel.module.scss";
import CardSecondary from "@/components/Cards/CardSecondary";
import { useState } from "react";

function Carousel({ data }: { data: IForecastDay[] }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.btnContainer}>
        <button
          onClick={prevSlide}
          className={`${styles.carousel__btn} ${styles.previous}`}
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className={`${styles.carousel__btn} ${styles.next}`}
        >
          &gt;
        </button>
      </div>
      {data.slice(activeIndex, activeIndex + 3).map((day, index) => {
        //ignore the first element of the forecastday array (today)
        return <CardSecondary key={index} data={day} index={index} />;
      })}
    </div>
  );
}

export default Carousel;
