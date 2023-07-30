import LoginForm from '../login/LoginForm';
import styled from 'styled-components';
import Logo from '../reusable-ui/Logo';

const LoginPage = () => {
	return (
		<LoginPageStyled>
			<Logo />
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
	background: url('/img/F03-burger-background.jpg');
	background-size: cover;
	background-position: center;
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 1;
	}
`;

export default LoginPage;
