import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMMING_SOON } from '../../../../../../enums/product';
import { findObjectById } from '../../../../../utils/array';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import { checkIfProductIsClicked } from '../Menu/helper';

export default function BasketProducts() {
	const {
		basket,
		isModeAdmin,
		menu,
		handleDeleteBasketProduct,
		handleProductSelected,
		productSelected,
	} = useContext(OrderContext);

	const handleOnDelete = (event, productToDelete) => {
		event.stopPropagation();
		handleDeleteBasketProduct(productToDelete);
	};

	return (
		<BasketProductsStyled>
			{basket.map((basketProduct) => {
				const menuProduct = findObjectById(basketProduct.id, menu);
				return (
					<div className="basket-card" key={basketProduct.id}>
						<BasketCard
							{...menuProduct}
							imageSource={
								menuProduct.imageSource
									? menuProduct.imageSource
									: IMAGE_COMMING_SOON
							}
							quantity={basketProduct.quantity}
							onDelete={(event) => handleOnDelete(event, basketProduct.id)}
							isClickable={isModeAdmin}
							onClick={
								isModeAdmin
									? () => handleProductSelected(basketProduct.id)
									: null
							}
							isSelected={checkIfProductIsClicked(
								basketProduct.id,
								productSelected.id
							)}
						/>
					</div>
				);
			})}
		</BasketProductsStyled>
	);
}

const BasketProductsStyled = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	.basket-card {
		margin: 10px 16px;
		box-sizing: border-box;
		:first-child {
			margin-top: 20px;
		}
		:last-child {
			margin-bottom: 20px;
		}
	}
`;
