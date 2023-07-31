import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
			<hr />
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
	z-index: 1;
	text-align: 'center';
	max-width: 500px;
	min-width: 400px;
	margin: 20px auto;
	padding: 3.5rem 2.5rem;
	border-radius: 5px;
	font-family: 'Amatic SC', cursive;

	hr {
		border: 1.5px solid #f56a2c;
		margin-bottom: 40px;
	}

	h1 {
		color: white;
		font-size: 48px;
	}

	h2 {
		color: white;
		margin: 20px 10px 10px;
		font-size: 36px;
	}
`;

export default LoginForm;
