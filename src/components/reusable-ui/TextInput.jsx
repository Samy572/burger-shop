import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { version } from 'react';
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

	// Proprieté dynamique de nom possibilité de destructuration

	${(props) => extraStyle[props.version]}

	/* ${({ version }) => extraStyle[version]} */
`;

// Extra style version minimalist && normal

const extraStyleNormal = css`
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

const extraStyleMinimalist = css`
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
// Dictionnaire de style spécifique
const extraStyle = {
	normal: extraStyleNormal,
	minimalist: extraStyleMinimalist,
};
