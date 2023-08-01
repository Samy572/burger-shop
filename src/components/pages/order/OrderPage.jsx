import styled from 'styled-components';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Main from './Main';
import { theme } from '../../../theme';

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
	background-color: ${theme.colors.primary};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.container {
		height: 95vh;
		width: 95%;
		display: flex;
		flex-direction: column;
		border-radius: ${theme.borderRadius.extraRound};
	}
`;
