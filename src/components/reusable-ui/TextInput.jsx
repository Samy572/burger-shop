import styled, { css } from 'styled-components';
import { theme } from '../../theme';
export default function TextInput({
	value,
	onChange,
	Icon,
	className,
	version = 'normal',
	...restProps
}) {
	return (
		<TextInputStyled className={className} version={version}>
			<div className="icon">{Icon && Icon}</div>
			<input value={value} onChange={onChange} {...restProps} />
		</TextInputStyled>
	);
}

const TextInputStyled = styled.div`
	border-radius: ${theme.borderRadius.round};
	display: flex;
	align-items: center;
	input {
		border: none;
		font-size: ${theme.fonts.size.SM};
		width: 100%;
		&::placeholder {
			color: ${theme.colors.greySemiDark};
		}
	}
	.icon {
		font-size: ${theme.fonts.size.SM};
		margin: 0 3px 0px 8px;
		display: flex;
	}
	${(props) => {
		if (props.version === 'normal') return normalStyle;
		if (props.version === 'minimalist') return extraMinimalistStyle;
	}};
`;

// Extra style version minimalist && normal

const normalStyle = css`
	background-color: ${theme.colors.white};
	padding: 18px 28px;
	color: ${theme.colors.greySemiDark};

	input {
		color: ${theme.colors.dark};

		&::placeholder {
			background-color: ${theme.colors.white};
		}
	}
`;

const extraMinimalistStyle = css`
	background-color: ${theme.colors.greyLight};
	padding: 8px 6px;
	color: ${theme.colors.greyBlue};
	input {
		background: ${theme.colors.greyLight};
		color: ${theme.colors.dark};
		&:focus {
			outline: 0;
		}
	}
	.icon {
		margin-right: 15px;
		color: ${theme.colors.background_dark};
	}
`;
