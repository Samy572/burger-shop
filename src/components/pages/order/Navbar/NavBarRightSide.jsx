import styled from 'styled-components';
import Profile from './Profile';
import NavbarRightSideIncomplet from './NavbarRightSideIncomplet';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { theme } from '../../../../theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

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
				backgroundCustom={theme.colors.background_dark}
				colorCustom={theme.colors.primary}
			/>
			{/* <NavbarRightSideIncomplet /> */}
			<Profile username={username} />
			<ToastContainer className="toaster" bodyClassName="body-toast" />
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

	.Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
		background: ${theme.colors.background_dark};
	}

	.body-toast {
		.Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
			margin-right: 20px;
			margin-left: 5px;
		}
		div {
			line-height: 1.3em;
		}
	}
`;
