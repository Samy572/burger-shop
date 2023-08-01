import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
export default function NavBarRightSide({ username }) {
	return (
		<NavBarRightSideStyled>
			Right
			<h1>
				Hey <span className="userName">{username}</span>
			</h1>
			<Link to="/">
				<button>Se déconnecter</button>
			</Link>
			<BsPersonCircle className="icon" />
		</NavBarRightSideStyled>
	);
}

const NavBarRightSideStyled = styled.div`
	background-color: purple;
`;
