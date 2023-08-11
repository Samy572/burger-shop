import styled from 'styled-components';
import { theme } from '../../theme';

export default function Tab({ Icon, label }) {
	return (
		<TabStyled>
			<div className="icon">{Icon}</div>
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
	border-radius: ${theme.borderRadius.subtle};
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;

	cursor: pointer;

	.icon {
		display: flex;
	}
`;
