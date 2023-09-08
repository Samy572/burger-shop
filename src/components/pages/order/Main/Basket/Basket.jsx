import styled from 'styled-components';
import Total from './Total';
import { formatPrice } from '../../../../../utils/math';
import Footer from './Footer';
import BasketProducts from './BasketProducts';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import EmptyBasket from './EmptyBasket';
export default function Basket() {
	// State
	const { basket } = useContext(OrderContext);

	return (
		<BasketStyled>
			<Total amountToPay={formatPrice(0)} />
			{/* <BasketProducts basket={basket} /> */}
			{<EmptyBasket basket={basket} />}
			<Footer />
		</BasketStyled>
	);
}

const BasketStyled = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	text-transform: uppercase;
`;
