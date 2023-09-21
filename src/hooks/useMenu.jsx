import { useState } from 'react';
import { fakeMenu } from '../data/fakeMenu';
import { deepClone } from '../utils/array';
import { EMPTY_PRODUCT } from '../../enums/product';

export const useMenu = () => {
	const [menu, setMenu] = useState(fakeMenu.LARGE);
	const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

	const handleAdd = (newProduct) => {
		const menuCopy = deepClone(menu);
		const menuUpdated = [newProduct, ...menuCopy];
		setMenu(menuUpdated);
	};

	const handleDelete = async (idProduct) => {
		const copyMenu = deepClone(menu);
		const updateMenu = copyMenu.filter((el) => el.id != idProduct);
		await setMenu(updateMenu);
		setProductSelected(EMPTY_PRODUCT);
	};

	const handleEdit = (productBeingUpdate) => {
		// Copie du state avec un deep clone
		const menuCopy = deepClone(menu);
		// Manip de la copie du state
		const indexOfProductToEdit = menu.findIndex(
			(menuProduct) => menuProduct.id === productBeingUpdate.id
		);

		// Update du state
		menuCopy[indexOfProductToEdit] = productBeingUpdate;
		setMenu(menuCopy);
	};

	const resetMenu = () => {
		setMenu(fakeMenu.LARGE);
	};

	return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
