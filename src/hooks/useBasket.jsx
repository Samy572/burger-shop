import { useState } from 'react';
import { fakeBasket } from '../data/fakeBasket';
import { deepClone, findInArray, getIndex } from '../utils/array';

export const useBasket = () => {
	const [basket, setBasket] = useState(fakeBasket.EMPTY);
	const handleAddToBasket = (productToAdd) => {
		const basketCopy = deepClone(basket);

		const productFoundInBasket = findInArray(
			productToAdd.id,
			handleAddToBasket
		);

		// Le produit n'est pas trouvé dans le basket
		if (!productFoundInBasket) {
			const newBasketProduct = {
				...productToAdd,
				quantity: 1,
			};
			const basketUpdated = [newBasketProduct, ...basketCopy];

			setBasket(basketUpdated);
			return;
		}
		// Si le produit est déjà dans le basket qtt+=1

		const indexBasketProductToIncrement = basket.getIndex(
			productToAdd.id,
			basketCopy
		);
		basketCopy[indexBasketProductToIncrement].quantity += 1;
		setBasket(basketCopy);
	};

	return { basket, handleAddToBasket };
};
