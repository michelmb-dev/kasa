import styles from "./Card.module.css";
import {useNavigate} from "react-router-dom";

function Card({data}) {

	const {id, title, cover} = data;
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/${id}`);
	}

	return (
		<article onClick={handleNavigate} className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<img src={cover} alt={title}/>
		</article>
	);
}

export default Card;
