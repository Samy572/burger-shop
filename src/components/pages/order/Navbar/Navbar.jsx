import styled from 'styled-components';
import Logo from '../../../reusable-ui/Logo';
import { theme } from '../../../../theme';
import { refreshPage } from '../../../../utils/window';
import NavBarRightSide from './NavBarRightSide';

export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<Logo className={'logo-order-page'} onClick={refreshPage} />
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

	.logo-order-page {
		cursor: pointer;
	}
`;
