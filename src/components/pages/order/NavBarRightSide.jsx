import styled from 'styled-components';
import Profile from './Profile';
export default function NavBarRightSide() {
	return (
		<NavBarRightSideStyled>
			<Profile />
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
