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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	::before {
		content: '';
		width: 100%;
		height: 100vh;
		background: url('/img/F03-burger-background.jpg') rgba(0, 0, 0, 0.7);
		background-size: cover;
		background-position: center;
		background-blend-mode: darken;
		position: absolute;
		top: 0;
		left: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}
`;

export default LoginPage;
