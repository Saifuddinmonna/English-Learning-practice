import "./App.css";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import Login from "./components/FirebaseAuthentication/Login/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";

import CourseHolder from "./components/Courses/CourseHolder";
import Signup from "./components/FirebaseAuthentication/Signup/Signup";
import FAQ from "./components/FAQ/FAQ";
import Course from "./components/Courses/Course";
import CheckOut from "./components/Header/CheckOut/CheckOut";
import PrivateRoute from "./Routes/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";

function App() {
	const { darkmode } = useContext(AuthContext);
	console.log("darkmode", darkmode);
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			errorElement: <ErrorPage></ErrorPage>,
			children: [
				{
					path: "/home",

					element: <Home></Home>,
				},

				{
					path: "/blog",
					element: <Blog></Blog>,
				},
				{
					path: "/signup",
					element: <Signup></Signup>,
				},
				{
					path: "/login",
					element: <Login></Login>,
				},
				{
					path: "/faq",
					element: <FAQ></FAQ>,
				},

				{
					path: "/courses",
					loader: () => {
						return fetch(
							"https://server-for-assignment-10.vercel.app/",
						);
					},
					element: <CourseHolder> </CourseHolder>,
					children: [
						{
							path: "/courses",
							loader: () => {
								return fetch(
									"https://server-for-assignment-10.vercel.app/",
								);
							},
							element: <Courses></Courses>,
							children: [],
						},
						{
							path: "/courses/course/:id",

							loader: ({ params }) => {
								const id = params.id;
								const nid = parseInt(id);
								console.log(typeof nid);
								const url = `https://server-for-assignment-10.vercel.app/courses/${id}`;
								console.log("url test", url);
								return fetch(url);
							},
							element: <Course></Course>,
						},
						{
							path: "/courses/course/checkout",

							element: (
								<PrivateRoute>
									{" "}
									<CheckOut></CheckOut>
								</PrivateRoute>
							),
						},
					],
				},
				{
					path: "*",
					element: <ErrorPage></ErrorPage>,
				},
			],
		},
	]);

	return (
		<div data-theme={darkmode === true && "dark"} className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
