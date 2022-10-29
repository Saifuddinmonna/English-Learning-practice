import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const CoursesCard = () => {
	const courseData = useLoaderData();
	console.log(courseData);
	return (
		<div>
			<div className=" ">
				{courseData.map((course) => (
					<div key={course.id}>{course.course}</div>
				))}
			</div>
		</div>
	);
};

export default CoursesCard;
