import { createContext } from 'react';

export default createContext({
	isModeAdmin: false,
	setisModeAdmin: () => {},

	isCollapsed: false,
	setisCollapsed: () => {},

	isAddSelected: false,
	setisAddSelected: () => {},

	isEditSelected: true,
	setisEditSelected: () => {},

	currentTabSelected: 'add',
	setcurrentTabSelected: () => {},
});
