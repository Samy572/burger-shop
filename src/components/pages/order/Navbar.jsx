import styled from 'styled-components';
import NavBarRightSide from './NavBarRightSide';
import Logo from '../../reusable-ui/Logo';
import { theme } from '../../../theme';
export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<Logo />
			<NavBarRightSide username={username} />
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav`
	background-color: ${theme.colors.white};
	border-top-right-radius: ${theme.borderRadius.extraRound};
	border-top-left-radius: ${theme.borderRadius.extraRound};
	height: 10vh;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
`;
