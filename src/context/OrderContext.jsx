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

	newProduct: {},
	setNewProduct: () => {},
	EMPTY_PRODUCT: {},
	productSelected: {},
	setProductSelected: () => {},

	handleEdit: () => {},

	// useRef
	titleEditRef: {},

	// Basket
	basket: [],
	setBasket: () => {},
});
