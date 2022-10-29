import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
	return (
		<div className=" grid align-items-center ">
			<Header></Header>
			<Outlet></Outlet>
			<div
				className="hero min-h-screen m-3 p-3 border shadow-md"
				style={{
					backgroundImage: `url("https://unsplash.com/photos/Z2ImfOCafFk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fGxlYXJuaW5nJTIwZW5nbGlzaHxlbnwwfHx8fDE2NjY4ODE0NTQ&force=true")`,
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-xl">
						<h1 className="mb-5 text-5xl font-bold">
							Why learning English with us is different
						</h1>
						<p className="mb-5">
							Our smart app features, Vocabulary Review and
							Grammar Review, are the best way to ensure you never
							forget a word again and learn what goes where in
							sentences – from basic to more advanced English
							grammar.
						</p>
						<p>
							{" "}
							This English speaking course explains word
							pronunciation using different sounds and shows you
							how to use the simple present tense. We also
							demonstrate the value of using good descriptive
							words or adjectives, recapping both possessive
							adjectives from ‘Beginner English 102’ and common
							adjectives from ‘Beginner English 104’. We then
							explain how to use demonstrative adjectives (like
							‘this and ‘that’) and when to use singular or plural
							nouns.
						</p>
						<button
							onClick={() =>
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: "smooth",
								})
							}
							className="btn btn-outline btn-info text-decoration-none text-white fw-bolder">
							<Link className="text-decoration-none" to={"/courses"}>Get Started</Link>
						</button>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;
