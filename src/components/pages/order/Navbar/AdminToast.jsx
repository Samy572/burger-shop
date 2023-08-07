import styled from 'styled-components';
import { theme } from '../../../../theme';
import { ToastContainer } from 'react-toastify';

export default function AdminToast() {
	return (
		<AdminToastStyled>
			<ToastContainer className="toaster" bodyClassName="body-toast" />
		</AdminToastStyled>
	);
}

const AdminToastStyled = styled.div`
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
