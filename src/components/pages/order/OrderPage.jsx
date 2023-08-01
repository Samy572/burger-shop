import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const OrderPage = () => {
	const { username } = useParams();
	return (
		<OrderPageStyled>
			<div className="container">
				<div className="navBar">
					<h1>
						Hey <span className="userName">{username}</span>
					</h1>
					<button className="disconect">
						<Link to="/">{'Se déconnecter'}</Link>
					</button>
					<BsPersonCircle className="icon" />
				</div>
				<main>main</main>
			</div>
		</OrderPageStyled>
	);
};

export default OrderPage;

const OrderPageStyled = styled.div`
	background-color: orange;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.container {
		background-color: red;
		height: 95vh;
		width: 95%;
		display: flex;
		flex-direction: column;
	}

	.navBar {
		height: 10vh;
		background-color: blue;
	}
	main {
		background-color: green;
		flex: 1;
	}
`;
