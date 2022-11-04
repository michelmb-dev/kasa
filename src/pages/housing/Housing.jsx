import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Housing() {
	const {id} = useParams();
	const [housing, setHousing] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		const getHousing = () => {
			fetch('../logements.json')
				.then((res) => res.json())
				.then((datas) => {
					const data = datas.find(d => d.id === id);
					setHousing(data);
					if (data === undefined) navigate('/error');
				}).catch(() => navigate("/error"));
		}
		getHousing();
	},[id, navigate])

	return (
		<>
			<div>{housing.title}</div>
		</>
	);
}

export default Housing;
