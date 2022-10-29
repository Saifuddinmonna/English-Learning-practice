
import React from "react";


const Blog = () => {
	return (
		<div className="container">
			<h1 className="text-capitalize text-primary">
				thid is blog for testing
			</h1>
			<div className="border rounded-md shadow p-3 m-3 bg-red-50">
				{" "}
				<h1 className="text-capitalize text-primary">
					what is cors in expres js?
				</h1>{" "}
				<p>
					CORS is a node. js package for providing a Connect/Express
					middleware that can be used to enable CORS with various
					options. <br />
					What is CORS for NPM? CORS is shorthand for Cross-Origin
					Resource Sharing. It is a mechanism to allow or restrict
					requested resources on a web server depend on where the HTTP
					request was initiated. This policy is used to secure a
					certain web server from access by other website or domain.{" "}
					<br />
					How do I enable CORS in node JS? Configure CORS with
					Options: If we send a POST request from
					http://localhost:8080 , it'll be blocked by the browser as
					only GET and PUT are supported: fetch
				</p>
			</div>
			<div className="border rounded-md shadow p-3 m-3 bg-red-50">
				{" "}
				<h1 className="text-capitalize text-primary">
					why are you using firebase?
				</h1>{" "}
				<p>
					In English Firebase helps you develop high-quality apps,
					grow your user base, and earn more money. Each feature works
					independently, and they work even better together. <br />
					What should I use Firebase for? Firebase is great for quick
					projects: it's easy to set up, fast, in many cases requires
					only front-end logic. It lets you focus on your app instead
					of implementing custom authentication, web sockets or
					database connections. <br />
					What is Firebase and benefits? Image result for why are you
					using firebase The Firebase is a Backend-as-a-Service (BaaS)
					that offers the developers a wide spectrum of tools and
					services to develop high-quality apps at a much faster
					pace.May 28, 2022
				</p>
				<h className="text-capitalize text-primary">
					what are options do you have to implement authentication?
				</h>
				<p>
					Types of Authentication Options #1. Token Authentication. A
					token can be defined as a digitally encoded signature used
					to authenticate and authorize a user to access specific
					resources on a network. ... #2. Standard Authentication. ...
					#3. Multi-Factor Authentication (MFA) ... #4. Passwordless
					Authentication. ... #5. Social Authentication.
				</p>
			</div>
			<div className="border rounded-md shadow p-3 m-3 bg-red-50">
				{" "}
				<h1 className="text-capitalize text-primary">
					how does the private route work?
				</h1>{" "}
				<p>
					The private route component is similar to the public route,
					the only change is that redirect URL and authenticate
					condition. If the user is not authenticated he will be
					redirected to the login page and the user can only access
					the authenticated routes If he is authenticated brand brand{" "}
					<br />
					What are protected routes? Protected routes are those routes
					that only grant access to authorized users. This means that
					users must first meet certain conditions before accessing
					that specific route. For instance, your application can
					require only logged-in users be able to visit the dashboard
					page.
				</p>
			</div>
			<div className="border rounded-md shadow p-3 m-3 bg-red-50">
				<h1 className="text-capitalize text-primary">
					what is node js?
				</h1>{" "}
				<p>
					Node.js is an open source server environment; Node.js is
					free ; Node.js can generate dynamic page content; Node.js
					can create, open, read, write, delete, and ... <br />
					What is NodeJS used for? It is used for server-side
					programming, and primarily deployed for non-blocking,
					event-driven servers, such as traditional web sites and
					back-end API services, but was originally designed with
					real-time, push-based architectures in mind. Every browser
					has its own version of a JS engine, and node.{" "}
				</p>
				<h1 className="text-capitalize text-primary">
					How does node work?
				</h1>
				<p>
					It is a used as backend service where javascript works on
					the server-side of the application. This way javascript is
					used on both frontend and backend. Node. js runs on chrome
					v8 engine which converts javascript code into machine code,
					it is highly scalable, lightweight, fast, and
					data-intensive. <br />
					How does node execute? Node. js takes a different approach.
					It runs a single-threaded event loop registered with the
					system to handle connections, and each new connection causes
					a JavaScript callback function to fire.{" "}
				</p>
			</div>
		</div>
	);
};

export default Blog;
