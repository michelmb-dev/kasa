import Landing from "../../components/landing/Landing";
import background from "../../assets/bg-about.png";
import styles from "./About.module.css";
import Dropdown from "../../components/dropdown/Dropdown";

function About() {
	return (
		<>
			<Landing background={background}/>
			<section className={styles.wrapper}>
				<Dropdown title="Fiabilité">
					<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
				</Dropdown>
				<Dropdown title="Respect">
					<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
				</Dropdown>
				<Dropdown title="Service">
					<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
				</Dropdown>
				<Dropdown title="Sécurité">
					<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
				</Dropdown>
			</section>
		</>
	);
}

export default About;
