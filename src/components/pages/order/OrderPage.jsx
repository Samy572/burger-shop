import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OrderPage = () => {
	const { username } = useParams();

	return (
		<>
			<h1>Hello from {username}</h1>
			<button>
				<Link to="/">{"Retourner à la page d'accueil"}</Link>
			</button>
		</>
	);
};

export default OrderPage;
