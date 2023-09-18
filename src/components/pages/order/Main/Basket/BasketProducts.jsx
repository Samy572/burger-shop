import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMMING_SOON } from '../../../../../../enums/product';
import { findObjectById } from '../../../../../utils/array';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';

export default function BasketProducts() {
	const {
		basket,

		menu,
	} = useContext(OrderContext);

	return (
		<BasketProductsStyled>
			<div className="basket-card">
				{basket.map((product) => {
					const menuProduct = findObjectById(product.id, menu);

					return (
						<BasketCard
							key={product.id}
							{...menuProduct}
							quantity={product.quantity}
							imageSource={
								menuProduct.imageSource
									? menuProduct.imageSource
									: IMAGE_COMMING_SOON
							}
						/>
					);
				})}
			</div>
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
