import styled from 'styled-components';
import { theme } from '../../theme';

export default function Header({ children }) {
	return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
	height: 70px;
	width: 100%;
	padding: 0 16px;
	display: flex;
	align-items: center;
	background-color: ${theme.colors.background_dark};
`;
