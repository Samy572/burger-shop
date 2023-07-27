import { Link } from 'react-router-dom';
const RedirectButton = ({ props, path }) => {
	console.log(props);
	return (
		<button>
			<Link to={path}>{props}</Link>
		</button>
	);
};

export default RedirectButton;
