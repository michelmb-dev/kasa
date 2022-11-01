import styles from "./Landing.module.css";

function Landing({ background, children }) {
	return (
    <section className={styles.landing}>
      <img src={background} alt="Vue sur les montagnes"/>
      {children}
    </section>
	);
}

export default Landing;
