import styled from 'styled-components';
import Total from './Total';
import { formatPrice } from '../../../../../utils/math';
import Footer from './Footer';
import BasketProducts from './BasketProducts';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import EmptyBasket from './EmptyBasket';
import { theme } from '../../../../../theme';
export default function Basket() {
	// State
	const { basket } = useContext(OrderContext);

	const isBasketEmpty = basket.length === 0;
	console.log(isBasketEmpty);
	return (
		<BasketStyled>
			<Total amountToPay={formatPrice(0)} />
			{isBasketEmpty ? <EmptyBasket /> : <BasketProducts products={basket} />}
			<Footer />
		</BasketStyled>
	);
}

const BasketStyled = styled.div`
	background: ${theme.colors.background_white};
	box-shadow: ${theme.shadows.basket};
	display: flex;
	flex-direction: column;
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	overflow-y: hidden;
	.head {
		position: sticky;
		top: 0;
	}

	.footer {
		border-bottom-left-radius: ${theme.borderRadius.extraRound};
		position: sticky;
		bottom: 0;
	}
`;
