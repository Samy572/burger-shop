import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminPanel() {
	const { isAddSelected, isEditSelected } = useContext(OrderContext);
	return (
		<AdminPanelStyled>
			{isAddSelected && 'Ajouter un produit'}
			{isEditSelected && 'Modifier un produit'}
		</AdminPanelStyled>
	);
}

const AdminPanelStyled = styled.div`
	border: solid 1px;
	height: 250px;
	background-color: ${theme.colors.background_white};
	border: 1px solid ${theme.colors.greyLight};
	box-shadow: ${theme.shadows.subtle};
`;
