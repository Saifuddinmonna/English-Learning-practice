import React, { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaBeer, FaGoogle, FaGithub } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useState } from "react";

const Login = () => {
	const [errorMessageDisplay, setErrorMessageDisplay] = useState();
	const [errorMessageDisplaycode, setErrorMessageDisplaycode] = useState();
	const {
		signinWithGoogle,
		signinWithGithub,
		functionsignInWithEmailAndPassword,
	} = useContext(AuthContext);
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const navigate = useNavigate();

	const handlefunctionsignInWithEmailAndPassword = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log("emailpassword", email, password);
		functionsignInWithEmailAndPassword(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset("");
				toast("login successful !", {
					position: "top-right",
					autoClose: 300,
				});
				navigate(from, { replace: true });

				setErrorMessageDisplay("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMessageDisplay(errorMessage);
				// form.reset("");
			});
		form.value = " ";
	};

	const handleGoogleSignin = () => {
		signinWithGoogle()
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast("login successful !", {
					position: "top-right",
					autoClose: 400,
				});
				setErrorMessageDisplay("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMessageDisplay(errorMessage);
			});
	};
	const handleGithubSignin = () => {
		signinWithGithub()
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast("login successful  in Github!", {
					position: "top-right",
					autoClose: 400,
				});
				setErrorMessageDisplay("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMessageDisplay(errorMessage);
			});
	};

	return (
		<div>
			<div className="hero min-h-fit bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
						<p className="py-6">Please Login! to see the content</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form
							onSubmit={handlefunctionsignInWithEmailAndPassword}
							action="/events"
							className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
									name="email"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="text"
									placeholder="password"
									className="input input-bordered"
									name="password"
									required
								/>
								<label className="label">
									<Link
										to="#"
										className="label-text-alt link link-hover">
										Forgot password?
									</Link>
								</label>
								<label className="label">
									Don't have an account?
									<Link
										to="/signup"
										className="label-text-alt link link-hover border border-red shadow m-1 btn btn-sm">
										Sign Up
									</Link>
								</label>
							</div>
							<div className="border rounded-md shadow">
								<small className="text-red-500">
									{errorMessageDisplay}
								</small>
								{/* <small>{errorMessageDisplaycode}</small> */}
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-outline-primary w-full">
									Login
								</button>
							</div>
						</form>

						<div className="form-control mt-6">
							<button
								onClick={handleGoogleSignin}
								className="btn btn-outline-primary w-full flex align-middle text-right justify-center">
								<span className="pt-2">
									<FaGoogle className="p-0 m-0 fs-3 inline-block" />
								</span>{" "}
								Login with Google
							</button>
						</div>
						<div className="form-control mt-6">
							<button
								onClick={handleGithubSignin}
								className="btn btn-outline-primary w-full">
								<span>
									<FaGithub className="p-0 m-0 fs-3 inline-block"></FaGithub>
								</span>{" "}
								Login in Github
							</button>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;
