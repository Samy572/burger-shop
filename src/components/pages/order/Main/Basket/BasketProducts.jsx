import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMMING_SOON } from '../../../../../../enums/product';

export default function BasketProducts({ products }) {
	return (
		<BasketProductsStyled>
			<div className="basket-card">
				{products.map((product) => {
					return <BasketCard key={product.id} {...product} imageSource={product.imageSource ? product.imageSource : IMAGE_COMMING_SOON} />;
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
