import styled from 'styled-components';
import { theme } from '../../theme';

export default function Tab({ Icon, onClick, className, label }) {
	return (
		<TabStyled onClick={onClick} className={className}>
			<div className="icon">{Icon}</div>
			{label && <span className="label">{label}</span>}
		</TabStyled>
	);
}

const TabStyled = styled.button`
	height: 43px;
	padding: 0 22px;

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	left: 5%;
	top: 1px;
	font-size: ${theme.fonts.size.P0};
	color: ${theme.colors.greySemiDark};
	background-color: ${theme.colors.background_white};
	box-shadow: ${theme.shadows.subtle};

	border-width: 1px 1px 2px 1px;
	border-style: solid;
	border-color: ${theme.colors.greyLight};
	border-top-left-radius: ${theme.borderRadius.round};
	border-top-right-radius: ${theme.borderRadius.round};

	cursor: pointer;

	.icon {
		display: flex;
	}

	.label {
		margin-left: 13px;
		&:hover {
			text-underline-offset: 3px;
		}
	}
`;
