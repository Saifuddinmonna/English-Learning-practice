import React from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
	// const navigate = useNavigate();
	const { cart } = useContext(AuthContext);

	// const handleNavigate = () => {
	// 	navigate("/courses/course/");
	// };
	return (
		<div className="border shadow-lg rounded m-2 p-3">
			<h1 className="rounded-3xl bg-red-50 border text-primary p-2 m-2 fw-bolder uppercase ">
				Checkout A Course
			</h1>
			<h3 className="rounded bg-red-50 border text-primary p-2 m-2">
				Your premium access for the flowing {cart.length} Courses
			</h3>
			{cart?.map((member, Index) => (
				<div
					key={Index}
					className="text-primary border rounded-3xl p-3 m-3 bg-red-100">
					{member}
				</div>
			))}
		</div>
	);
};

export default CheckOut;
