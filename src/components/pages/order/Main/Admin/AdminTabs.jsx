import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { theme } from '../../../../../theme';

export default function AdminTabs({ isCollapsed, setisCollapsed }) {
	return (
		<AdminTabsStyled>
			<Tab
				label=""
				onClick={() => setisCollapsed(!isCollapsed)}
				Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
				className={isCollapsed ? 'is-active' : ''}
			/>
			<Tab
				label={'Ajouter un produit'}
				onClick={() => setisCollapsed(!isCollapsed)}
				Icon={<AiOutlinePlus />}
				className={isCollapsed ? 'is-active' : ''}
			/>
			<Tab
				label={'Modifier un produit'}
				onClick={() => setisCollapsed(!isCollapsed)}
				Icon={<MdModeEdit />}
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
	button {
		margin-left: 1px;
	}
`;
