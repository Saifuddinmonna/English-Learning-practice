import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
	return (
		<div
			className="hero min-h-screen m-2 p-2 border shadow-md"
			style={{
				backgroundImage: `url("https://unsplash.com/photos/oB2aEeE8s4A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fGxlYXJuaW5nJTIwZW5nbGlzaHxlbnwwfHx8fDE2NjY4ODE4NDE&force=true")`,
			}}>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">
						Learn English Courses
					</h1>
					<p className="mb-5">
						Discover new work and study opportunities worldwide with
						a range of online English courses designed to improve
						your English speaking and writing skills.
					</p>
					<p>
						{" "}
						This English speaking course explains word pronunciation
						using different sounds and shows you how to use the
						simple present tense. We also demonstrate the value of
						using good descriptive words or adjectives, recapping
						both possessive adjectives from ‘Beginner English 102’
						and common adjectives from ‘Beginner English 104’. We
						then explain how to use demonstrative adjectives (like
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
						className="btn tn-outline-info text-decoration-none text-white fw-bolder">
						<Link className="text-decoration-none" to={"/courses"}>
							Get Started
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
