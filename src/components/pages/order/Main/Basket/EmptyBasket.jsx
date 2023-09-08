import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyBasket() {
	return (
		<EmptyBasketStylde>
			<span className="empty-message">votre commande est vide.</span>
		</EmptyBasketStylde>
	);
}

const EmptyBasketStylde = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	font-size: ${theme.fonts.size.P4};
	font-family: ${theme.fonts.family.stylish};
	color: ${theme.colors.greyBlue};
	box-shadow: ${theme.shadows.basket};
	line-height: 2;
`;
