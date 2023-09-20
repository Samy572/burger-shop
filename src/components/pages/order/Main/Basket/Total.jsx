import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Header from '../../../../reusable-ui/Header';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { formatPrice } from '../../../../../utils/math';
import { calculateSumToPay } from './helper';
import CasinoEffect from '../../../../reusable-ui/CasinoEffect';

export default function Total() {
	const { basket, menu } = useContext(OrderContext);

	const sumToPay = calculateSumToPay(basket, menu);
	return (
		<Header>
			<TotalStyled>
				<span className="total">Total</span>
				<CasinoEffect count={formatPrice(sumToPay)} />
			</TotalStyled>
		</Header>
	);
}

const TotalStyled = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.family.stylish};
	font-size: ${theme.fonts.size.P4};
	font-weight: ${theme.fonts.weights.bold};
	letter-spacing: 2px;
`;
