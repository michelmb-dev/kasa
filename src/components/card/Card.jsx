import styles from "./Card.module.css";

function Card({data}) {

	const {title, cover} = data;

	return (
		<article className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<img src={cover} alt=""/>
		</article>
	);
}

export default Card;
