import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Profil from "../../components/profil/Profil";
import Stars from "../../components/stars/Stars";
import styles from "./Housing.module.css";
import Carousel from "../../components/carousel/Carousel";
import Tags from "../../components/tags/Tags";
import Dropdown from "../../components/dropdown/Dropdown";

function Housing() {
	const {id} = useParams();
	const [housing, setHousing] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		fetch('../logements.json')
			.then((res) => res.json())
			.then((datas) => {
				const data = datas.find(d => d.id === id);
				setHousing(data);
				if (data === undefined) navigate('/error');
			}).catch(() => navigate("/error"));
	},[id, navigate]);

	const {title, location, pictures, rating, host, tags, description, equipments} = housing;

	document.title = `Kasa - ${title}`;

	return (
			<>
				{pictures &&
				<Carousel arrayImages={pictures}/>
				}
				<div className={styles.headerWrapper}>
					<div className={styles.title}>
						<h2>{title}</h2>
						<p>{location}</p>
						{tags && <Tags tags={tags}/>}
					</div>
					<div className={styles.author}>
						<Profil host={host}/>
						<Stars rating={rating}/>
					</div>
				</div>
				<div className={styles.bodyWrapper}>
					<Dropdown smallVariant={true} title="Description">
						<p>{description}</p>
					</Dropdown>
					<Dropdown smallVariant={true} title="Équipements">
						{equipments && equipments.map((text, index) => (
							<p key={index}>{text}</p>
						))}
					</Dropdown>
				</div>
			</>

	);
}

export default Housing;
