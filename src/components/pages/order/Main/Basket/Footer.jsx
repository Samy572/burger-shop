import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { theme } from '../../../../../theme';

export default function Footer() {
	return (
		<Header>
			<FooterStyled>
				<span>Codé avec 🧡 et React.JS</span>
			</FooterStyled>
		</Header>
	);
}

const FooterStyled = styled.div`
	text-transform: uppercase;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${theme.colors.white};
	font-family: ${theme.fonts.family.stylish};
	font-size: ${theme.fonts.size.P2};
`;
