import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Courses = () => {
	const coursesData = useLoaderData();
	console.log(coursesData);

	return (
		<div>
			<div className=" bg-orange-100 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-2">
				{coursesData.map((course,Index) => (
					<>
						<div
							key={Index}
							className="border rounded-md shadow-md p-2">
							<div className="card w-full bg-base-100 shadow-xl">
								<figure>
									<img src={course.pic} alt="Shoes" />
								</figure>
								<div className="card-body">
									<h2 className="card-title">
										{course.course}
										<div className="badge badge-secondary">
											NEW
										</div>
									</h2>
									<p>{course.details}</p>
									<div className="">
										<p>
											Monthly Subscription Price : tk
											{course.price}
										</p>

										<div className="">
											<button className=" d-block btn w-full   btn-info">
												<NavLink
													className=" text-decoration-none"
													to={`/courses/course/${course.id}`}>
													Show Details
												</NavLink>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
			<Outlet></Outlet>
		</div>
	);
};

export default Courses;
