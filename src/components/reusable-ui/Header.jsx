import styled from 'styled-components';
import { theme } from '../../theme';

export default function Header({ children }) {
	return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
	height: 70px;
	display: flex;
	align-items: center;
	font-family: ${theme.fonts.family.stylish};
	background-color: ${theme.colors.background_dark};
	font-size: ${theme.fonts.size.P3};
	color: ${theme.colors.primary};
`;
