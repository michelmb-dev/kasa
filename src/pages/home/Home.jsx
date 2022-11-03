import Landing from "../../components/landing/Landing";
import background from "../../assets/bg-home.png";
import styles from "./Home.module.css";
import Card from "../../components/card/Card";
import {useOutletContext} from "react-router-dom";

function Home() {
	const data = useOutletContext();
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
