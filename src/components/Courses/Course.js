import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Course = () => {
	const singleCourse = useLoaderData();
	const navigate = useNavigate();

	const { id, pic, details, course } = singleCourse;
	const {
		handleAddtoCart,

		premiumAccess,
		handlehandleAddtoCart,
	} = useContext(AuthContext);

	// const handlehandleAddtoCart = (id) => {

	// 	let newCart = [];
	// 	const exists = cart.find((coursename) => coursename === course);
	// 	if (!exists) {
	// 		newCart = [...cart, course];
	// 		handlepremiumAccess(newCart);
	// 	} else {
	// 		navigate("/courses/course/checkout");

	// 		toast(" Thank for Click This for The Premium Access!", {
	// 			position: "top-center",
	// 			autoClose: 400,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			theme: "light",
	// 		});
	// 	}

	// 	setCart(newCart);
	// 	handlepremiumAccess(cart);
	// 	console.log("premium access", cart);
	// };

	const handlepremiumAccess = (cart) => {
		handlehandleAddtoCart({ course, id });

		navigate("/courses/course/checkout");

		// setTimeout(function () {
		// 	handlehandleAddtoCart({ singleCourse, course, id });
		// }, 2000);

		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	console.log("this is for signle page singleCourse details", singleCourse);
	const onButtonClickpdf = ({ id }) => {
		// using Java Script method to get PDF file
		const url = `https://server-for-assignment-10.vercel.app/courses/${id}`;
		fetch("SamplePDF.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "SamplePDF.pdf";
				alink.click();
			});
		});
	};
	return (
		<div className="border shadow rounded-md m-2 p-3">
			<div className="card w-full bg-base-100 shadow-xl">
				<header className="border rounded shadow-sm m-2 p-2 position-relative ">
					<h2>{singleCourse.course}</h2>
					<button
						onClick={() => onButtonClickpdf(id)}
						className="position-absolute  top-1 right-1 btn btn-outline btn-primary rounded-circle text-white btn-sm">
						{" "}
						Make Pdf
					</button>
					<div>
						<p className="border shadow rounded-md m-1 p-1">
							{singleCourse.details}
						</p>
					</div>
				</header>
				<figure className="border rounded shadow-sm m-2 p-2 ">
					<img src={singleCourse.pic} alt="Shoes" />
				</figure>
				<div className="border rounded shadow-sm m-2 p-2 text-justify">
					<p>{singleCourse.moredetails}</p>

					<div className="card-actions justify-end">
						<button
							onClick={() => {
								handlepremiumAccess({
									course,
									id,
								});
							}}
							className=" btn bg-red-500   btn-warning w-full">
							Get Premium Access
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
