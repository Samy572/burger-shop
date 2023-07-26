import { useState } from 'react';

const LoginPage = () => {
	const [inputName, setInputName] = useState('');

	const handleChange = (e) => {
		setInputName(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		inputName !== '' ? alert(`Bonjour ${inputName}`) : '';
		setInputName('');
	};

	return (
		<div>
			<h1>Bienvenue chez nous !</h1>
			<br />
			<h2>Connectez-vous</h2>
			<form action="submit" onSubmit={() => handleSubmit()}>
				<input
					value={inputName}
					required={true}
					onChange={() => handleChange(event)}
					type="text"
					placeholder="entrer votre prénom..."
				/>
				<button>Accédez à votre espace</button>
			</form>
		</div>
	);
};

export default LoginPage;
