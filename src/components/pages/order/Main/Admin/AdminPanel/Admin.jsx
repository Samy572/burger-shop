import styled from 'styled-components';
import AdminTabs from './AdminTabs.jsx';
import AdminPanel from './AdminPanel.jsx';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext.jsx';

export default function Admin() {
	const { isCollapsed } = useContext(OrderContext);
	return (
		<AdminStyled>
			<AdminTabs />
			{!isCollapsed && <AdminPanel />}
		</AdminStyled>
	);
}

const AdminStyled = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;
`;
