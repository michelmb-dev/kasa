import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error404 from "./pages/error/Error404";

function AppRoutes() {
	return (
		<div className="main-wrapper">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/404" element={<Error404 />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
