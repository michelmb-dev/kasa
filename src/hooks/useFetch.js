import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


function useFetch(url) {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
			const fetchData = async () => {
				const response = await fetch(url);
				const json = await response.json();
				setData(json);
			}
			fetchData().catch((e) => {
				if (data === null) {
					console.error(e);
					navigate("/404");
				}
			});
	}, [data, navigate, url]);
	return data;
}

export default useFetch;
