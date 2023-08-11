import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { theme } from '../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {
	const {
		isCollapsed,
		setisCollapsed,
		isAddSelected,
		setisAddSelected,
		isEditSelected,
		setisEditSelected,
	} = useContext(OrderContext);
	const selectAddTab = () => {
		setisCollapsed(false);
		setisAddSelected(true);
		setisEditSelected(false);
	};
	const selectEditTab = () => {
		setisCollapsed(false);
		setisEditSelected(true);
		setisAddSelected(false);
	};

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
				Icon={<AiOutlinePlus />}
				className={isAddSelected ? 'is-active' : ''}
				onClick={selectAddTab}
			/>
			<Tab
				label={'Modifier un produit'}
				Icon={<MdModeEditOutline />}
				className={isEditSelected ? 'is-active' : ''}
				onClick={selectEditTab}
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