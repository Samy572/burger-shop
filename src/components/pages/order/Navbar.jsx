import styled from 'styled-components';
import NavBarRightSide from './NavBarRightSide';
import Logo from '../../reusable-ui/Logo';
export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<Logo />
			<NavBarRightSide username={username} />
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav`
	background-color: blue;
	height: 10vh;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
`;
