import styles from "./Carousel.module.css";
import {useState} from "react";


function Carousel({arrayImages}) {
  const [currentSlide, setCurrentSlide] = useState(0);

   const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? arrayImages.length -1 : currentSlide -1
    )
  }

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === arrayImages.length -1 ? 0 : currentSlide + 1
    )
  }

  return (
		<div className={styles.container}>
				{arrayImages.map((img, index) => (
					<div key={index} className={currentSlide === index ? `${styles.slide} ${styles.active}` : styles.slide}>
						<img className={styles.image} src={img} alt="aperçu du logement"/>
					</div>
				))}
				<p className={styles.info}>{currentSlide + 1}/{arrayImages.length}</p>
      {arrayImages.length > 1 && (
        <>
          <span className={`${styles.btn} ${styles.prevSlide}`} onClick={prevSlide}>
            <svg fill="#FFFFFF" width="48" height="80" viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" />
            </svg>
          </span>
          <span className={`${styles.btn} ${styles.nextSlide}`} onClick={nextSlide}>
            <svg fill="#FFFFFF" width="48" height="80" viewBox="0 0 48 80"  xmlns="http://www.w3.org/2000/svg">
              <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z"/>
            </svg>
          </span>
        </>
      )}
		</div>
	);
}

export default Carousel;
