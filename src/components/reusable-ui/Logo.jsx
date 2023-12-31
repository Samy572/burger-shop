import styled from 'styled-components';
import { theme } from '../../theme';

export default function Logo({ className, onClick }) {
	return (
		<LogoStyled className={className} onClick={onClick}>
			<h1> CRAZY</h1>
			<img src="/img/F03 logo-orange.png" alt="logo-crazee-burger" />
			<h1> BURGER</h1>
		</LogoStyled>
	);
}

const LogoStyled = styled.div`
	color: ${theme.colors.white};
	display: flex;
	align-items: center;
	overflow: hidden;

	h1 {
		overflow: hidden;
		display: flex;
		justify-content: center;
		color: ${theme.colors.primary};
		font-size: ${theme.fonts.size.P4};
		line-height: 1em;
		font-weight: ${theme.fonts.weights.bold};
		text-transform: uppercase;
		letter-spacing: 1.5px;
		font-family: 'Amatic SC', cursive;
	}
	img {
		object-fit: contain;
		object-position: center;
		height: 60px;
		width: 80px;
		margin: 0 ${theme.gridUnit / 2}px;
	}
	.navBarLogo {
		transform: scale(0);
		h1 {
			font-size: 16px;
		}
	}
`;
