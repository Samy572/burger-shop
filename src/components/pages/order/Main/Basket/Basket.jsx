import styled from 'styled-components';
import Total from './Total';
import Footer from './Footer';
import BasketProducts from './BasketProducts';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import EmptyBasket from './EmptyBasket';
import { theme } from '../../../../../theme';
import { isEmpty } from '../../../../../utils/array';
export default function Basket() {
	// State
	const { basket } = useContext(OrderContext);

	return (
		<BasketStyled>
			<Total />
			{isEmpty(basket) ? <EmptyBasket /> : <BasketProducts products={basket} />}
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

	::-webkit-scrollbar {
		width: 0.2em;
	}

	/* .head {
		position: sticky;
		top: 0;
	} */

	.footer {
		border-bottom-left-radius: ${theme.borderRadius.extraRound};
		position: sticky;
		bottom: 0;
	}
`;
