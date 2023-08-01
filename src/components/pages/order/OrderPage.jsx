import styled from 'styled-components';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Main from './Main';

const OrderPage = () => {
	const { username } = useParams();
	return (
		<OrderPageStyled>
			<div className="container">
				<Navbar username={username} />
				<Main />
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
`;
