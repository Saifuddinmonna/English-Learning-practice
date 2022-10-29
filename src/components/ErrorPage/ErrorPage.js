import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="text-red-700 fs-1 fw-bolder container border rounded-md bg-red-100 p-10 mt-10">
			<h2 className="text-red-700 fs-1 fw-bolder">
				Warning this is Error!!! You r in Wrong route Path You made
				folowing eror
			</h2>
                        <h2 className="text-red-700 fs-1 fw-bolder">{ error.statusText || error.message }</h2>
                        <button><Link to={'/'}>Go to Home</Link></button>
		</div>
	);
};

export default ErrorPage;
