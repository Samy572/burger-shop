import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';
import LoginForm from '../login/LoginForm';
const LoginPage = () => {
	return (
		<LoginPageStyled>
			<Logo className={'logo-login-page'} />
			<LoginForm />
		</LoginPageStyled>
	);
};

const LoginPageStyled = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: url('/img/burger-and-fries-background.jpg');
	background-size: cover;
	background-position: center;
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}
	// Props className
	.logo-login-page {
		transform: scale(2.5);
	}
`;

export default LoginPage;
