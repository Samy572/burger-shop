import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { IoChevronForward } from 'react-icons/io5';
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import styled from 'styled-components';
import { theme } from '../../../theme';

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
			<TextInput
				value={inputValue}
				onChange={handleChange}
				Icon={<BsPersonCircle className="icon" />}
				placeholder={'entrer votre prénom...'}
				required
			/>
			<PrimaryButton
				Icon={<IoChevronForward className="icon" />}
				label={'Acceder à votre espace'}
			/>
		</LoginFormStyled>
	);
};

const LoginFormStyled = styled.form`
	z-index: 1;
	text-align: 'center';
	max-width: 500px;
	min-width: 400px;
	margin: 0px auto;
	padding: 3.5rem ${theme.spacing.lg};
	border-radius: ${theme.borderRadius.round};
	font-family: 'Amatic SC', cursive;

	hr {
		border: 1.5px solid ${theme.colors.loginLine};
		margin-bottom: ${theme.gridUnit * 5}px;
	}

	h1 {
		color: ${theme.colors.white};
		font-size: ${theme.fonts.size.P5};
	}

	h2 {
		color: ${theme.colors.white};
		margin: 20px 10px 10px;
		text-align: center;
		font-size: ${theme.fonts.size.P4};
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${theme.fonts.size.P0};
		margin-left: 10px;
	}
`;

export default LoginForm;
