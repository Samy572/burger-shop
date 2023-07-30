import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';

const LoginForm = () => {
	const [inputName, setInputName] = useState('');
	const navigate = useNavigate();

	const handleChange = (event) => {
		setInputName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/order/${inputName}`);
	};

	return (
		<LoginFormStyled action="submit" onSubmit={() => handleSubmit(event)}>
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
			<button>Acceder à votre espace</button>
		</LoginFormStyled>
	);
};

const LoginFormStyled = styled.form`
	background-color: green;
	height: auto;
`;

export default LoginForm;
