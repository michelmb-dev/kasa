import styles from "./Landing.module.css";

function Landing({ background, styleHeight, children }) {
	return (
    <section className={`${styles.landing} ${styleHeight}`}>
      <img src={background} alt="Vue sur les montagnes"/>
      {children}
    </section>
	);
}

export default Landing;
