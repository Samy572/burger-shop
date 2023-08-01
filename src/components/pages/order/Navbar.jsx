import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
export default function Navbar({ username }) {
	return (
		<NavBarStyled>
			<div className="left-side">Left</div>
			<div className="right-side">
				Right
				<h1>
					Hey <span className="userName">{username}</span>
				</h1>
				<Link to="/">
					<button>Se déconnecter</button>
				</Link>
				<BsPersonCircle className="icon" />
			</div>
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
	.right-side {
		background-color: purple;
	}
`;
