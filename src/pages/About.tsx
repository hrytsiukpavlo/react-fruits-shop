import { Link } from "react-router-dom";
import Store from "./Store";

export default function About() {
	return (
		<>
			<h1>This is about page.</h1>
			<Link to="/store" style={{ fontSize: "2.5rem", textDecoration: "none" }}>
				To visit the store click here
			</Link>
		</>
	);
}
