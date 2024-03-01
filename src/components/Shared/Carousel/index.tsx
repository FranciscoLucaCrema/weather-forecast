import { IForecastDay } from "@/models/IInformation";
import styles from "./carousel.module.scss";
import CardSecondary from "@/components/Cards/CardSecondary";
import { useRef, useState } from "react";

function Carousel({ data }: { data: IForecastDay[] }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const handleScroll = (scroll: number) => {
    const positionScroll = scrollPosition + scroll;

    setScrollPosition(positionScroll);

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = positionScroll;
    }
  };

  return (
    <>
      <button
        onClick={() => {
          prevSlide();
          handleScroll(-200);
        }}
        className={`${styles.carousel__btn} ${styles.previous}`}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          nextSlide();
          handleScroll(200);
        }}
        className={`${styles.carousel__btn} ${styles.next}`}
      >
        &gt;
      </button>
      <div className={styles.carousel} ref={scrollRef}>
        {data.slice(activeIndex).map((day, index) => {
          // Ignorar el primer elemento del array de forecastday (hoy)
          return <CardSecondary key={index} data={day} index={index} />;
        })}
      </div>
    </>
  );
}

export default Carousel;
