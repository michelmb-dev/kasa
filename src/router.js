import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Error404 from "./pages/error/Error404";
import Home from "./pages/home/Home";
import Housing from "./pages/housing/Housing";
import About from "./pages/about/About";

export const router = createBrowserRouter([
	{
		path:"/",
		element: <App/>,
		children: [
			{
				path: '/',
				element: <Home/>,
				errorElement: <Error404/>,


			},
			{
				path: "/:id",
				element: <Housing />,
				errorElement: <Error404/>,
			},
			{
				path: "/about",
				element: <About/>,
				errorElement: <Error404/>,

			},
		],
	},
])
