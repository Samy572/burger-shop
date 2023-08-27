import styled from 'styled-components';
import Main from './Main/Main';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import { useState } from 'react';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../data/fakeMenu';
import { EMPTY_PRODUCT } from './Main/Admin/addForm/AddForm';

const OrderPage = () => {
	const [isModeAdmin, setisModeAdmin] = useState(false);
	const [isCollapsed, setisCollapsed] = useState(false);
	const [menu, setMenu] = useState(fakeMenu.MEDIUM);
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

	const [currentTabSelected, setcurrentTabSelected] = useState('add');

	const handleAdd = (newProduct) => {
		const menuCopy = [...menu];
		const menuUpdated = [newProduct, ...menuCopy];
		setMenu(menuUpdated);
	};

	const handleDelete = (idProduct) => {
		const copyMenu = [...menu];
		const updateMenu = copyMenu.filter((el) => el.id != idProduct);
		setMenu(updateMenu);
	};

	const resetMenu = () => {
		setMenu(fakeMenu.SMALL);
	};

	const orderContextValue = {
		isModeAdmin,
		setisModeAdmin,
		isCollapsed,
		setisCollapsed,
		currentTabSelected,
		setcurrentTabSelected,
		menu,
		handleAdd,
		handleDelete,
		resetMenu,
		newProduct,
		setNewProduct,
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
