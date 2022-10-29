import React from "react";
import "./Header.css";
import { useEffect } from "react";
// import { themeChange } from "theme-change";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBeer, BiUserCircle, FaGithub, FaUserCheck } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
	const {
		user,
		Signouthandle,
		userphotooptional,
		useroptionalname,
		darkmodeHandler,
	} = useContext(AuthContext);
	const [toggler, setToggler] = useState(false);

	// useEffect(() => {
	// 	themeChange(false);
	// 	// 👆 false parameter is required for react project
	// }, []);

	const handleSignouthandle = () => {
		Signouthandle()
			.then((result) => {
				// Sign-out successful.
				toast("Sign-out successful. !", {
					position: "top-center",
					autoClose: 400,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				const user = result.user;
				console.log(user);
				console.log("useroptionalname ", useroptionalname);
			})
			.catch((error) => {
				console.log(error.message);
				// An error happened.
			});
	};

	const toogleHandler = (e) => {
		const toggolvalue = e.target.checked;
		setToggler(toggolvalue);
		console.log(toggler, "this is toggler");
		darkmodeHandler(toggler);
		console.log("this is toggole value", toggolvalue);
	};

	return (
		<Navbar
			className="position-sticky"
			collapseOnSelect
			expand="lg"
			bg="primary"
			variant="dark">
			<Container className="tooltipcustomhover">
				<span className="px-2">
					<div className="avatar">
						<div className="w-12 mask mask-hexagon">
							<Link to={"/"}>
								<img src="logo.png" alt="" />
							</Link>
						</div>
					</div>
				</span>
				<NavLink
					className=" text-decoration-none  text-white uppercase"
					to="/home">
					English Learning{" "}
				</NavLink>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav tooltipcustomhover">
					<Nav className="me-auto">
						<Nav.Link className="text-white">
							<NavLink
								variant="dark"
								className="Nav.Link px-2 text-decoration-none text-white "
								to="/home">
								Home
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/courses">
								Courses
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/blog">
								Blog
							</NavLink>

							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/faq">
								FAQ
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white"
								to="/courses/course/checkout">
								CheckOut
							</NavLink>
						</Nav.Link>
					</Nav>
					<Nav>
						{!user?.uid ? (
							<>
								<NavLink
									className="px-2 text-decoration-none text-white"
									to="/signup">
									Signup
								</NavLink>
								<NavLink
									className="px-2 text-decoration-none text-white"
									to="/login">
									Login
								</NavLink>
							</>
						) : (
							<>
								<Nav.Link eventKey={2}></Nav.Link>

								<span className="tooltipcustomhover px-2">
									<div className="tooltipcustomhover avatar align-items-center position-relative">
										<small className="text-white tooltipcustom position-absolute -bottom-3 -left-5">
											{user?.displayName || user?.email}
										</small>
										<div
											className="tooltipcustomhover  w-12 mask mask-hexagon"
											data-tip="hello">
											{user.photoURL ? (
												<img
													className="tooltipcustomhover"
													src={user?.photoURL}
													alt=""
												/>
											) : (
												<FaUserCheck className="p-0 m-0 fs-3 inline-block"></FaUserCheck>
											)}
										</div>
										<button
											className=" btn rounded-full btn-outline-warning  btn-sm text-white mx-2 px-2"
											onClick={handleSignouthandle}>
											SignOut
										</button>
									</div>
								</span>
							</>
						)}
					</Nav>
				</Navbar.Collapse>

				<input
					type="checkbox"
					className="toggle toggle-accent"
					// checked
					onChange={toogleHandler}
				/>
			</Container>
		</Navbar>
	);
};

export default Header;
