import styled from 'styled-components';
import Main from './Main/Main';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import { useRef, useState } from 'react';
import OrderContext from '../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../enums/product';
import { useMenu } from '../../../hooks/useMenu';
import { useBasket } from '../../../hooks/useBasket.jsx';
import { findObjectById } from '../../../utils/array';

const OrderPage = () => {
	// State
	const [isModeAdmin, setisModeAdmin] = useState(false);
	const [isCollapsed, setisCollapsed] = useState(false);
	const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
	const [currentTabSelected, setcurrentTabSelected] = useState('edit');
	const titleEditRef = useRef();

	// Comportement appel du custom hook useMenu et useBasket
	const { menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu();
	const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
		useBasket();

	const handleProductSelected = async (idProductClicked) => {
		const productClickedOn = findObjectById(idProductClicked, menu);
		await setisCollapsed(false);
		await setcurrentTabSelected('edit');
		await setProductSelected(productClickedOn);
		titleEditRef.current.focus();
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
		EMPTY_PRODUCT,
		productSelected,
		setProductSelected,
		handleEdit,
		titleEditRef,
		basket,
		setBasket,
		handleAddToBasket,
		handleDeleteBasketProduct,
		handleProductSelected,
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
