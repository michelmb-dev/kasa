import {useEffect, useState} from "react";


function useFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
			fetch(url,{
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((e) => {
					setError(false);
					console.error(e);
				});
	}, [url]);
	return {data, error};
}

export default useFetch;
