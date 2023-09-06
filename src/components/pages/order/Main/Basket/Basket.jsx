import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { formatPrice } from '../../../../../utils/math';
import Footer from './Footer';

export default function Basket() {
	return (
		<BasketStyled>
			<Total amountToPay={formatPrice(0)} />
			<div className="body-basket">
				<p>votre commande est vide.</p>
			</div>
			<Footer />
		</BasketStyled>
	);
}

const BasketStyled = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	text-transform: uppercase;

	.body-basket {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		font-size: ${theme.fonts.size.P4};
		font-family: ${theme.fonts.family.stylish};
		color: ${theme.colors.greyMedium};
		box-shadow: ${theme.shadows.basket};
	}
`;
