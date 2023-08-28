import styled from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { theme } from '../../../../theme';
import AdminToast from './AdminToast';
import OrderContext from '../../../../context/OrderContext';
import { useContext } from 'react';

export default function NavBarRightSide() {
	const { isModeAdmin, setisModeAdmin } = useContext(OrderContext);
	const displayToast = () => {
		if (!isModeAdmin) {
			toast.info('Mode admin activé', {
				theme: 'dark',
				position: 'bottom-right',
				autoClose: true,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
			});
		}
		setisModeAdmin(!isModeAdmin);
	};

	return (
		<NavBarRightSideStyled>
			<ToggleButton
				labelIfChecked={'Désactiver le mode admin'}
				labelIfUnchecked={'Activer le mode admin'}
				onToggle={displayToast}

				// backgroundCustom={theme.colors.background_dark}
				// colorCustom={theme.colors.primary}
			/>

			<Profile />
			<AdminToast />
		</NavBarRightSideStyled>
	);
}

const NavBarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	padding-right: 50px;
	.toaster {
		max-width: 300px;
	}
`;
