import styled from 'styled-components';
import BasketCard from './BasketCard';

export default function BasketProducts({ products }) {
	return (
		<BasketProductsStyled>
			<div className="basket-card">
				{products.map((product) => {
					return <BasketCard key={product.id} {...product} />;
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
		/* border: 1px solid blue; */
		margin: 10px 16px;
		box-sizing: border-box;
		:first-child {
			margin-top: 20px;
			/* border: 1px solid red; */
		}
		:last-child {
			margin-bottom: 20px;
		}
	}
`;
