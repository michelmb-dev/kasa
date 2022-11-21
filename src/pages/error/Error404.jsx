import {Link} from "react-router-dom";
import styles from "./Error.module.css";

function Error404() {
		document.title = "Kasa - 404";
		return (
			<section className={styles.wrapper}>
				<div className={styles.bigLetter}>404</div>
				<h1 className={styles.message}><span>Oups! La page que</span>&nbsp;<span>vous demandez n'existe pas.</span></h1>
				<Link className={styles.linkHome} to='/'>Retourner sur la page d’accueil</Link>
			</section>
		);
}

export default Error404;
