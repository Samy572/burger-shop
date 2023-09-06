import styled from 'styled-components';
import { theme } from '../../../../theme';

export default function Basket() {
	return (
		<BasketStyled>
			<div className="head-basket">
				<span>Total</span>
				<span>0.00 €</span>
			</div>
			<div className="body-basket">
				<p>votre commande est vide.</p>
			</div>
			<div className="footer-basket">Codé avec ❤️ et react.js</div>
		</BasketStyled>
	);
}

const BasketStyled = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 7% 86% 7%;
	box-shadow: ${theme.shadows.strong};
	text-transform: uppercase;

	.head-basket {
		padding: 0 20px;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		background-color: ${theme.colors.background_dark};
		color: ${theme.colors.primary};
		font-family: ${theme.fonts.family.stylish};
		font-size: ${theme.fonts.size.P3};
	}

	.body-basket {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: ${theme.fonts.size.P4};
		font-family: ${theme.fonts.family.stylish};
		color: ${theme.colors.greyMedium};
	}

	.footer-basket {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.background_dark};
		color: ${theme.colors.background_white};
	}
`;
