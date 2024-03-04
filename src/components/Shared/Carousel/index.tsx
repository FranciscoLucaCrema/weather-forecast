import { IForecastDay } from "@/models/IInformation";
import styles from "./carousel.module.scss";
import CardSecondary from "@/components/Cards/CardSecondary";
import { useEffect, useRef, useState } from "react";
import { Direction } from "@/models/TypeScroll";

function Carousel({ data }: { data: IForecastDay[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const listNode = scrollRef.current;
    const infoSection = listNode?.querySelectorAll("section")[scrollPosition];

    if (infoSection) {
      infoSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  const scrollToCards = (direction: Direction) => {
    if (direction === "prev") {
      setScrollPosition((curr) => {
        const isFirstPosition = scrollPosition === 0;
        /* If it is the first position, we do not go back further, otherwise we decrease the position by 1 */
        return isFirstPosition ? 0 : curr - 1;
      });
    } else {
      /* Check if we are in the last position */
      const isLastPosition = scrollPosition === data.length - 1;
      /* If we are not in the last position, we increase the position by 1 */
      if (!isLastPosition) {
        setScrollPosition((curr) => curr + 1);
      }
    }
  };

  return (
    <>
      {/* If the value of selected days is greater than 1, show the carousel buttons */}
      {data.length > 1 && (
        <>
          <button
            onClick={() => scrollToCards("prev")}
            className={`${styles.carousel__btn} ${styles.previous}`}
          >
            &lt;
          </button>
          <button
            onClick={() => scrollToCards("next")}
            className={`${styles.carousel__btn} ${styles.next}`}
          >
            &gt;
          </button>
        </>
      )}
      <div className={styles.carousel} ref={scrollRef}>
        {data.map((day, index) => {
          return <CardSecondary key={index} data={day} index={index} />;
        })}
      </div>
    </>
  );
}

export default Carousel;
