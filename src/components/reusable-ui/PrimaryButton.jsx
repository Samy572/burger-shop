import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export default function Button({
	Icon,
	label,
	className,
	onClick,
	version = 'normal',
}) {
	return (
		<PrimaryButtonStyled
			version={version}
			onClick={onClick}
			className={className}
		>
			<span>{label}</span>
			<div className="icon">{Icon && Icon}</div>
		</PrimaryButtonStyled>
	);
}
const PrimaryButtonStyled = styled.button`
	${(props) => props.version === 'normal' && normalStyle}
	${(props) => props.version === 'success' && succesStyle}
`;
// style specifique

const normalStyle = css`
	width: 100%;
	border: ${theme.borderRadius.subtle} solid red;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	white-space: nowrap;
	text-decoration: none;
	line-height: 1;
	padding: 18px 24px;
	border-radius: ${theme.borderRadius.round};
	font-size: ${theme.fonts.size.P0};
	font-weight: ${theme.fonts.weights.heavy};
	color: ${theme.colors.white};
	background-color: ${theme.colors.primary};
	border: 1px solid ${theme.colors.primary};

	&:hover:not(:disabled) {
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary};
		border: ${theme.borderRadius.subtle} solid ${theme.colors.orange};
		transition: all 200ms ease-out;
	}
	&:active {
		color: ${theme.colors.white};
		background-color: ${theme.colors.primary};
		border: 1px solid ${theme.colors.primary};
	}
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const succesStyle = css`
	background-color: ${theme.colors.success};
	color: ${theme.colors.white};
	cursor: pointer;
	border-radius: ${theme.borderRadius.round};
	border: solid 1px ${theme.colors.success};
	height: 35px;
	padding: 0px 1.5em;
	font-weight: ${theme.fonts.weights.semiBold};
	&:hover {
		background: ${theme.colors.white};
		color: ${theme.colors.success};
		border: solid 1px ${theme.colors.success};
	}
	&:active {
		color: ${theme.colors.white};
		background: ${theme.colors.success};
		border: 1px solid ${theme.colors.success};
	}
`;
