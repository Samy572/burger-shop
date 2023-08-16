import styled from 'styled-components';
import { theme } from '../../../../theme';
// import Basket from '../Main/Basket';
import Menu from '../Main/Menu';
import Admin from './Admin/AdminPanel/Admin.jsx';
import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext.jsx';

export default function Main() {
	const { isModeAdmin } = useContext(OrderContext);
	return (
		<MainStyled>
			{/* <div className="basket">
				<Basket />
			</div> */}
			<div className="menu-and-admin">
				<Menu />
				{isModeAdmin && <Admin />}
			</div>
		</MainStyled>
	);
}

const MainStyled = styled.div`
	height: calc(95vh - 10vh);
	background-color: ${theme.colors.white};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
	display: grid;
	/* grid-template-columns: 25% 1fr; */
	.menu-and-admin {
		position: relative;
		display: grid;
	}

	/* .basket {
		background-color: pink;
	} */
`;
