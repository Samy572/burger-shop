import { useState } from 'react';
import RedirectButton from '../RedirectButton';

const LoginForm = () => {
	const [inputName, setInputName] = useState('');

	const name = 'Acceder à votre espace';

	const handleChange = (event) => {
		setInputName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
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
			<RedirectButton props={name} path={`/order/${inputName}`} />
		</form>
	);
};

export default LoginForm;
