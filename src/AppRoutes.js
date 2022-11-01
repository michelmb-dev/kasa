import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";

function AppRoutes() {
	return (
		<div className="main-wrapper">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/404" element={<Error />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
