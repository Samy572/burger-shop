import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { theme } from '../../../../../theme';

export default function AdminTabs({ isCollapsed, setisCollapsed }) {
	return (
		<AdminTabsStyled>
			<Tab
				onClick={() => setisCollapsed(!isCollapsed)}
				Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
				className={isCollapsed ? 'is-active' : ''}
			/>
		</AdminTabsStyled>
	);
}

const AdminTabsStyled = styled.div`
	display: flex;
	padding: 0 20px;

	.is-active {
		background-color: ${theme.colors.background_dark};
		color: ${theme.colors.white};
		border-color: ${theme.colors.background_dark};
	}
`;
