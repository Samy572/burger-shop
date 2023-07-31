import styled from 'styled-components';
import { theme } from '../../theme';
export default function TextInput({ value, onChange, Icon, ...restProps }) {
	return (
		<InputStyled>
			{Icon && Icon}
			<input value={value} onChange={onChange} {...restProps} />
		</InputStyled>
	);
}

const InputStyled = styled.div`
	background: ${theme.colors.white};
	border-radius: ${theme.borderRadius.round};
	display: flex;
	align-items: center;
	padding: 18px 24px;
	margin: 18px 0;
	.icon {
		font-size: ${theme.fonts.size.P2};
		margin-right: ${theme.gridUnit}px;
		color: ${theme.colors.greySemiDark};
	}
	input {
		border: none;
		font-size: ${theme.fonts.size.P0};
		color: ${theme.colors.dark};
		width: 100%;

		&::placeholder {
			color: ${theme.colors.greyMedium};
			background: ${theme.colors.white};
		}
	}
`;
