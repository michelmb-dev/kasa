import Landing from "../../components/landing/Landing";
import background from "../../assets/bg-home.png";
import styles from "./Home.module.css";

function Home() {
	return (
		<>
			<Landing background={background} styleHeight={styles.landingHeight}>
				<h1 className={styles.landingTitle}>
					<span>Chez vous,&nbsp;</span><span>partout et ailleurs</span>
				</h1>
			</Landing>
		</>
	);
}

export default Home;
