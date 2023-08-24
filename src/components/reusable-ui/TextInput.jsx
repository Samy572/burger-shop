import styled from 'styled-components';
import { theme } from '../../theme';
export default function TextInput({ value, onChange, Icon, className, ...restProps }) {
	return (
		<InputStyled className={className}>
			<div className="icon">
				{Icon && Icon}
				<input value={value} onChange={onChange} {...restProps} />
			</div>
		</InputStyled>
	);
}

const InputStyled = styled.div`
	background: ${theme.colors.white};
	border-radius: ${theme.borderRadius.round};
	display: flex;
	align-items: center;
	padding: 18px 24px;

	input {
		margin-left: 15px;
		border: none;
		font-size: ${theme.fonts.size.P1};
		color: ${theme.colors.dark};
		width: 100%;

		&::placeholder {
			color: ${theme.colors.greyMedium};
			background: ${theme.colors.white};
		}
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${theme.fonts.size.P1};
		margin: 0 8px 0 10px;
		color: ${theme.colors.greySemiDark};
	}
`;
