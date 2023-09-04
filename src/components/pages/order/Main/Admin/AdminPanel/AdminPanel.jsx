import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getTabsConfig } from './getTabConfig';

export default function AdminPanel() {
	const { currentTabSelected, productSelected, EMPTY_PRODUCT } =
		useContext(OrderContext);
	const hasAlreadyBeenclicked = productSelected !== EMPTY_PRODUCT;
	const tabs = getTabsConfig(currentTabSelected, hasAlreadyBeenclicked);
	const tabSelected = tabs.find((tab) => tab.index === currentTabSelected);

	return (
		<AdminPanelStyled>
			{currentTabSelected === tabSelected.index && tabSelected.Content}
		</AdminPanelStyled>
	);
}

const AdminPanelStyled = styled.div`
	border: solid 1px;
	height: 250px;
	background-color: ${theme.colors.background_white};
	border: 1px solid ${theme.colors.greyLight};
	box-shadow: ${theme.shadows.subtle};
	padding: 30px 5%;
`;
