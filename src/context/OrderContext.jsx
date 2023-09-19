import { createContext } from 'react';

export default createContext({
	isModeAdmin: false,
	setisModeAdmin: () => {},

	isCollapsed: false,
	setisCollapsed: () => {},

	currentTabSelected: 'add',
	setcurrentTabSelected: () => {},

	handleAdd: () => {},
	menu: [],
	setMenu: () => {},
	handleDelete: () => {},
	resetMenu: () => {},
	handleEdit: () => {},

	newProduct: {},
	setNewProduct: () => {},
	EMPTY_PRODUCT: {},

	productSelected: {},
	setProductSelected: () => {},
	handleProductSelected: () => {},

	// useRef
	titleEditRef: {},

	// Basket
	basket: [],
	setBasket: () => {},
	handleAddToBasket: () => {},
});
