import { useState } from 'react';

const LoginPage = () => {
	const [inputName, setInputName] = useState('');

	const handleChange = (e) => {
		setInputName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		inputName !== '' ? alert(`Bonjour ${inputName}`) : '';
		setInputName('');
	};

	return (
		<div>
			<h2>Bienvenue chez nous !</h2>
			<form action="submit" onSubmit={() => handleSubmit(event)}>
				<label htmlFor="name">Connectez-vous</label>
				<br />
				<input
					id="name"
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
