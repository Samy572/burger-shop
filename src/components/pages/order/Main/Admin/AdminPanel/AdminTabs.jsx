import styled from 'styled-components';
import Tab from '../../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { theme } from '../../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getTabsConfig } from './getTabConfig';

export default function AdminTabs() {
	const {
		isCollapsed,
		setisCollapsed,
		currentTabSelected,
		setcurrentTabSelected,
	} = useContext(OrderContext);

	const selectTab = (tabSelected) => {
		setisCollapsed(false); // Ouvrir le pannel
		setcurrentTabSelected(tabSelected); // reactualiser l'onglet selected
	};
	const tabs = getTabsConfig(currentTabSelected);

	return (
		<AdminTabsStyled>
			<Tab
				onClick={() => setisCollapsed(!isCollapsed)}
				Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
				className={isCollapsed ? 'is-active' : ''}
			/>
			{tabs.map((tab, id) => (
				<Tab
					key={id}
					label={tab.label}
					onClick={() => selectTab(tab.index)}
					Icon={tab.Icon}
					className={tab.className}
				/>
			))}
		</AdminTabsStyled>
	);
}

const AdminTabsStyled = styled.div`
	display: flex;
	padding: 0 20px;
	overflow: hidden;

	.is-active {
		background-color: ${theme.colors.background_dark};
		color: ${theme.colors.white};
		border-color: ${theme.colors.background_dark};
	}
	button {
		margin-left: 1px;
	}
`;
