import styled from 'styled-components';
import NavBarRightSide from './NavBarRightSide';
export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<div className="left-side">Left</div>
			<NavBarRightSide username={username} />
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav`
	background-color: blue;
	height: 10vh;
	display: flex;
	justify-content: space-between;

	.left-side {
		background-color: pink;
	}
`;
