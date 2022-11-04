import styles from "./Profil.module.css";

function Profil({host}) {
	return (
		<>
			{host &&
				<div className={styles.wrapper}>
					<p className={styles.author}>
						{host.name}
					</p>
					<div className={styles.avatar}>
						<img src={host.picture.toString()} alt=""/>
					</div>
				</div>
			}
		</>
	);
}

export default Profil;
