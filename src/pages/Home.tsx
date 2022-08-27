import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<h1>This is home page.</h1>
			<Link to="/store" style={{ fontSize: "2.5rem", textDecoration: "none" }}>
				To visit the store click here
			</Link>
		</>
	);
}
