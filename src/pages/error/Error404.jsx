import {Link} from "react-router-dom";
import styles from "./Error.module.css";

function Error404() {
		return (
			<section className={styles.wrapper}>
				<div className={styles.bigLetter}>404</div>
				<h1 className={styles.message}>Oups! La page que vous demandez n'existe pas.</h1>
				<Link className={styles.linkHome} to='/'>Retourner sur la page d’accueil</Link>
			</section>
		);
}

export default Error404;
