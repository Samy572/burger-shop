import styled from 'styled-components';
import Header from '../../../../../reusable-ui/Header';
import { theme } from '../../../../../../theme';

export default function Footer() {
	return (
		<Header>
			<BasketFooter>
				<span>Codé avec 🧡 et React.JS</span>
			</BasketFooter>
		</Header>
	);
}

const BasketFooter = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		font-size: ${theme.fonts.size.P2};
		font-family: ${theme.fonts.family.stylish};
		font-weight: ${theme.fonts.weights.bold};
		color: ${theme.colors.white};
	}
`;
