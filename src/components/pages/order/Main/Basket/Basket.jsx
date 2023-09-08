import styled from 'styled-components';
import Total from './Total';
import { formatPrice } from '../../../../../utils/math';
import Footer from './Footer';
import BasketProducts from './BasketProducts';
export default function Basket() {
	return (
		<BasketStyled>
			<Total amountToPay={formatPrice(0)} />
			<BasketProducts />
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
