import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<h1>
				Hey <span className="userName">{username}</span>
			</h1>
			<Link to="/">
				<button>Se déconnecter</button>
			</Link>
			<BsPersonCircle className="icon" />
		</NavBarStyled>
	);
}

const NavBarStyled = styled.nav`
	background-color: blue;
	height: 10vh;
`;
