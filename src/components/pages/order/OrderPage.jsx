import styled from 'styled-components';
import Main from './Main/Main';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import { useState } from 'react';
import OrderContext from '../../../context/OrderContext';

const OrderPage = () => {
	const [isModeAdmin, setisModeAdmin] = useState(false);
	const [isCollapsed, setisCollapsed] = useState(false);
	const [isAddSelected, setisAddSelected] = useState(false);
	const [isEditSelected, setisEditSelected] = useState(true);

	const orderContextValue = {
		isModeAdmin,
		setisModeAdmin,
		isCollapsed,
		setisCollapsed,
		isAddSelected,
		setisAddSelected,
		isEditSelected,
		setisEditSelected,
	};
	return (
		<OrderContext.Provider value={orderContextValue}>
			<OrderPageStyled>
				<div className="container">
					<Navbar />
					<Main />
				</div>
			</OrderPageStyled>
		</OrderContext.Provider>
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
