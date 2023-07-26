import { Link } from 'react-router-dom';
const LogoutButton = () => {
	return (
		<button>
			<Link to={'/'}>go back</Link>
		</button>
	);
};

export default LogoutButton;
