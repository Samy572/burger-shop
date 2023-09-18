import { useState } from 'react';
import { fakeBasket } from '../data/fakeBasket';
import { deepClone, findInArray } from '../utils/array';

export const useBasket = () => {
	const [basket, setBasket] = useState(fakeBasket.EMPTY);
	const handleAddToBasket = (productToAdd) => {
		const basketCopy = deepClone(basket);

		const isProductAlreadyInbasket = findInArray(
			productToAdd.id,
			handleAddToBasket
		);

		// Le produit n'est pas dans le basket
		if (!isProductAlreadyInbasket) {
			const newBasketProduct = {
				...productToAdd,
				quantity: 1,
			};
			const basketUpdated = [newBasketProduct, ...basketCopy];

			setBasket(basketUpdated);
			return;
		} else {
			const indexOfBasketProductToIncrement = (basket.findIndex = (
				basketProduct
			) => basketProduct.id === productToAdd.id);
			const basketUpdated = (basketCopy[
				indexOfBasketProductToIncrement
			].quantity += 1);
			setBasket(basketUpdated);
		}

		// Le produit est déjà dans le basket
	};

	return { basket, handleAddToBasket };
};
