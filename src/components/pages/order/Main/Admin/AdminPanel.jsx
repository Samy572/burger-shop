import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function AdminPanel() {
	return <AdminPanelStyled>AdminPanel</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
	border: solid 1px;
	height: 250px;
	background-color: ${theme.colors.background_white};
	border: 1px solid ${theme.colors.greyLight};
	box-shadow: ${theme.shadows.subtle};
`;
