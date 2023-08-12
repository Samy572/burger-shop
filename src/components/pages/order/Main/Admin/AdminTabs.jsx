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

	const selectTab = (tabSelected) => {
		setisCollapsed(false);

		if (tabSelected === 'add') {
			setisAddSelected(true);
			setisEditSelected(false);
		}

		if (tabSelected === 'edit') {
			setisEditSelected(true);
			setisAddSelected(false);
		}
	};

	const tabsConfig = [
		{
			label: '',
			onClick: () => setisCollapsed(!isCollapsed),
			Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
			className: isCollapsed ? 'is-active' : '',
		},
		{
			label: 'Ajouter un produit',
			onClick: () => selectTab('add'),
			Icon: <AiOutlinePlus />,
			className: isAddSelected ? 'is-active' : '',
		},
		{
			label: 'Modifier un produit',
			Icon: <MdModeEditOutline />,
			className: isEditSelected ? 'is-active' : '',
			onClick: () => selectTab('edit'),
		},
	];

	return (
		<AdminTabsStyled>
			{tabsConfig.map((tab, id) => {
				return (
					<Tab
						key={id}
						label={tab.label}
						onClick={tab.onClick}
						Icon={tab.Icon}
						className={tab.className}
					/>
				);
			})}
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
