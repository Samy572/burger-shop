import styled from 'styled-components';
import AdminTabs from './AdminTabs.jsx';
import AdminPanel from './AdminPanel.jsx';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext.jsx';
import { fadeInRight } from '../../../../../../theme/animations.js';
import { theme } from '../../../../../../theme/index.js';

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

	animation: ${fadeInRight} ${theme.animation.speed.slow} ease-out;
`;
