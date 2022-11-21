import Banner from "../../components/banner/Banner";
import background from "../../assets/bg-home.png";
import styles from "./Home.module.css";
import Card from "../../components/card/Card";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
	document.title = "Kasa - Accueil";

	const [housings, setHousings] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("../logements.json")
			.then((res) => res.json())
			.then((d) => setHousings(d))
			.catch(() =>	navigate("/error"));
	}, [navigate]);

	return (
		<>
			<Banner background={background} styleHeight={styles.landingHeight}>
				<h1 className={styles.landingTitle}>
					<span>Chez vous,&nbsp;</span><span>partout et ailleurs</span>
				</h1>
			</Banner>
			<section className={styles.cards}>
				{ housings.length > 0 && housings.map((item) => <Card data={item} key={item.id}/>)}
			</section>
		</>
	);
}

export default Home;
