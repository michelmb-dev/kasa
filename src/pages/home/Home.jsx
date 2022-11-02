import Landing from "../../components/landing/Landing";
import background from "../../assets/bg-home.png";
import styles from "./Home.module.css";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/card/Card";

function Home() {
	const data = useFetch("logements.json");
	return (
		<>
			<Landing background={background} styleHeight={styles.landingHeight}>
				<h1 className={styles.landingTitle}>
					<span>Chez vous,&nbsp;</span><span>partout et ailleurs</span>
				</h1>
			</Landing>
			<section className={styles.cards}>
				{ data && data.length > 0 && data.map((item) => <Card data={item} key={item.id}/>)}
			</section>
		</>
	);
}

export default Home;
