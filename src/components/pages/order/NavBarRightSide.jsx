import styled from 'styled-components';
import Profile from './Profile';
export default function NavBarRightSide({ username }) {
	return (
		<NavBarRightSideStyled>
			<Profile username={username} />
		</NavBarRightSideStyled>
	);
}

const NavBarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	padding-right: 50px;

	.admin-button {
		background-color: white;
	}

	.profile {
	}
`;
