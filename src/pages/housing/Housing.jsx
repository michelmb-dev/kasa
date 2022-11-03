import {useOutletContext, useParams} from "react-router-dom";

function Housing() {
	const housings = useOutletContext();
	const {id} = useParams();
	const housing = housings.find((h) => h.id === id);

	return (
		<>
			{housing &&
				<div>{housing.title}</div>
			}
		</>
	);
}

export default Housing;
