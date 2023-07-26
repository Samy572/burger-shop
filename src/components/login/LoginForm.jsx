import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
	const [inputName, setInputName] = useState('');

	const handleChange = (event) => {
		setInputName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`bonjour ${inputName}`);
		setInputName('');
	};

	const navigateToOrderPage = () => {
		return <Navigate to="hello" />;
	};

	return (
		<form action="submit" onSubmit={() => handleSubmit(event)}>
			<h1>Bienvenue chez nous !</h1>
			<br />
			<h2>Connectez-vous</h2>
			<input
				value={inputName}
				required={true}
				onChange={() => handleChange(event)}
				type="text"
				placeholder="entrer votre prénom..."
			/>
			<button onClick={navigateToOrderPage}>Accédez à votre espace</button>
		</form>
	);
};

export default LoginForm;
