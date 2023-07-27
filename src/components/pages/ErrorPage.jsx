import RedirectButton from '../RedirectButton';

const ErrorPage = () => {
	const name = 'Déconnexion';
	return (
		<>
			<h2>Error Page</h2>
			<RedirectButton props={name} path={'/'} />
		</>
	);
};

export default ErrorPage;
