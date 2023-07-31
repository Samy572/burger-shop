import styled from 'styled-components';
import { theme } from '../../theme';

export default function Button({ Icon, label }) {
	return (
		<PrimaryStyledButton>
			<span>{label}</span>
			{Icon && Icon}
		</PrimaryStyledButton>
	);
}

const PrimaryStyledButton = styled.button`
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
	font-weight: ${theme.fonts.weight.heavy};
	color: ${theme.colors.white};
	background-color: ${theme.colors.orange};
	border: 1px solid ${theme.colors.orange};

	&:hover:not(:disabled) {
		background-color: ${theme.colors.white};
		color: ${theme.colors.orange};
		border: ${theme.borderRadius.subtle} solid ${theme.colors.orange};
		transition: all 200ms ease-out;
	}
	&:active {
		color: ${theme.colors.white};
		background-color: ${theme.colors.orange};
		border: 1px solid ${theme.colors.orange};
	}
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;
