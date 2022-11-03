import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";
import styles from "./Error.module.css";

function Error404() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<section className={styles.wrapper}>
				<div className={styles.bigLetter}>404</div>
				<div>{error.errorElement}</div>
				<h1 className={styles.message}>Oups! La page que vous demandez n'existe pas.</h1>
				<Link className={styles.linkHome} to='/'>Retourner sur la page d’accueil</Link>
			</section>
		);
	}

	throw error;
}

export default Error404;
