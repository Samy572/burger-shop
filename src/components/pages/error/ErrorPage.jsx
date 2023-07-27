import { Link } from 'react-router-dom';
const ErrorPage = () => {
	return (
		<>
			<h1>Error Page</h1>
			<button>
				<Link to="/">Déconnexion</Link>
			</button>
		</>
	);
};

export default ErrorPage;
