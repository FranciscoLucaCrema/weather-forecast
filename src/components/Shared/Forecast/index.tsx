import { IForecastDay } from "@/models/IInformation";
import styles from "./Forecast.module.scss";
import CardSecondary from "@/components/Cards/CardSecondary";
import { useRef } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import ListItem from "@/components/Shared/ForecastList";

function Forecast({ data }: { data: IForecastDay[] }) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useWindowWidth(900);

  function scrollToCards(direction: string) {
    const listNode = carouselRef.current;
    const cardNode = listNode?.querySelectorAll("section")[0];

    if (listNode && cardNode) {
      if (direction === "left") {
        listNode!.scrollLeft -= cardNode.clientWidth + 10;
      }
      if (direction === "right") {
        listNode!.scrollLeft += cardNode.clientWidth + 10;
      }
    }
  }

  return (
    <>
      {/* If the value of selected days is greater than 1, show the carousel buttons */}

      {isDesktop ? (
        <>
          {data.length > 1 ? (
            <>
              <button
                onClick={() => scrollToCards("left")}
                className={`${styles.carousel__btn} ${styles.previous}`}
              >
                &lt;
              </button>
              <button
                onClick={() => scrollToCards("right")}
                className={`${styles.carousel__btn} ${styles.next}`}
              >
                &gt;
              </button>
            </>
          ) : (
            <></>
          )}
          <div className={styles.forecastCarousel} ref={carouselRef}>
            {data.map((day, index) => {
              return (
                <CardSecondary
                  key={index}
                  data={day}
                  oneCard={data.length === 1}
                />
              );
            })}
          </div>
        </>
      ) : (
        <ul className={styles.forecastList}>
          {data.map((day, index) => (
            <ListItem key={index} data={day}></ListItem>
          ))}
        </ul>
      )}
    </>
  );
}

export default Forecast;
