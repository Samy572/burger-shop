import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';
import Input from '../../reusable-ui/Input';
import styled from 'styled-components';

const LoginForm = () => {
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/order/${inputValue}`);
	};

	return (
		<LoginFormStyled action="submit" onSubmit={() => handleSubmit(event)}>
			<h1>Bienvenue chez nous !</h1>
			<hr />
			<h2>Connectez-vous</h2>
			<Input
				value={inputValue}
				onChange={handleChange}
				Icon={<BsPersonCircle className="icon" />}
				placeholder={'entrer votre prénom...'}
				required
				type="text"
			/>
			<button className="button-with-icon">
				<span>Acceder à votre espace</span>
				<IoChevronForward className="icon" />
			</button>
		</LoginFormStyled>
	);
};

const LoginFormStyled = styled.form`
	
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
	
	.button-with-icon {
		width: 100%;
		border: 1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		white-space: nowrap;
		text-decoration: none;
		line-height: 1;
		padding:18px 24px;
		border-radius: 5px;
		font-size:15px;
		font-weight:800;
		color: white;
		background-color: #ff9f1b;
		border : 1px solid #ff9f1b;

		&:hover:not(:disabled) {
			background-color: #fff;
			color: #ff9f1b;
			border: 1px solid #ff9f1b;
			transition: all 200ms ease-out;
		}
		&:active{
			color#fff;
			background-color: #ff9f1b;
			border: 1px solid #ff9f1b;
		}
		&:disabled{
			opacity:0.5;
			cursor: not-allowed;
		}
		.icon{
			display:flex;
			justify-content: center;
			align-items: center;
			font-size: 15px;
			margin-left: 10px;
		}
	}
`;

export default LoginForm;
