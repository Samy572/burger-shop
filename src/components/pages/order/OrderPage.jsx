import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Main from './Main/Main';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';

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
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;
	.container {
		height: 95vh;
		width: 95vw;
		display: flex;
		flex-direction: column;
		border-radius: ${theme.borderRadius.extraRound};
	}
`;
