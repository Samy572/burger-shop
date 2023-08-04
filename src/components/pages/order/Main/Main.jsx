import styled from 'styled-components';
import { theme } from '../../../../theme';
// import Basket from '../Main/Basket';
import Menu from '../Main/Menu';

export default function Main() {
	return (
		<MainStyled>
			{/* <Basket /> */}
			<Menu />
		</MainStyled>
	);
}

const MainStyled = styled.div`
	flex: 1;
	background-color: ${theme.colors.white};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
	display: grid;
	grid-template-columns: 1fr;
	
	/* .basket {
	} */
`;
