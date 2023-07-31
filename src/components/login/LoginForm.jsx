import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
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
			<div className="input-with-icon">
				<BsPersonCircle className="icon" />
				<input
					value={inputName}
					required={true}
					onChange={() => handleChange(event)}
					type="text"
					placeholder="entrer votre prénom..."
				/>
			</div>
			<div className="button-container">
				<button>Acceder à votre espace</button>
			</div>
		</LoginFormStyled>
	);
};

const LoginFormStyled = styled.form`
	background-color: green;
	z-index: 1;
	text-align: 'center';
	max-width: 500px;
	min-width: 400px;
	margin: 0px auto;
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
		text-align: center;
		font-size: 36px;
	}
	.input-with-icon {
		background: #fff;
		border-radius: 5px;
		display: flex;
		align-items: center;
		padding: 18px 24px;
		margin: 18px 0;
		.icon {
			font-size: 15px;
			margin-right: 8px;
			color: #93a2b1;
		}
		input {
			border: none;
			font-size: 15px;
			color: #17161a;
		}
		&::placeholder {
			color: lightgrey;
		}
	}
`;

export default LoginForm;
