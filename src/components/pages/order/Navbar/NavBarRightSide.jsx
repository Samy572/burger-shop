import styled from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { theme } from '../../../../theme';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import AdminToast from './AdminToast';

export default function NavBarRightSide({ username }) {
	const [isModeAdmin, setisModeAdmin] = useState(false);
	const displayToast = () => {
		if (!isModeAdmin) {
			toast.info('Mode admin activé', {
				theme: 'dark',
				position: 'bottom-right',
				autoClose: false,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
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
				backgroundcustom={theme.colors.background_dark}
				colorcustom={theme.colors.primary}
			/>
			{/* <NavbarRightSideIncomplet /> */}
			<Profile username={username} />
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
