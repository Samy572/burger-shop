import RedirectButton from '../RedirectButton';
import { useParams } from 'react-router-dom';
const OrderPage = () => {
	const name = "Retourner à la page d'accueil";
	const params = useParams();

	return (
		<>
			<h1>Hello from {params.id}</h1>
			<RedirectButton props={name} path={'/'} />
		</>
	);
};

export default OrderPage;
