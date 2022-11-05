import styles from "./Stars.module.css";

function Stars({rating}) {
	return (
		<>
			<div className={styles.stars}>
			{[...Array(5)].map((_, i) => {
				const index = ++i;
				return (
					<span className={index <= rating && styles.starActive}>&#9733;</span>
				);
			})}
			</div>
		</>
	);
}

export default Stars;
