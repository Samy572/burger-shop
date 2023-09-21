import { css } from 'styled-components';

export const adminAnimation = css`
	.admin-appear {
		transform: translateY(100%);
		opacity: 0.1;
	}
	.admin-appear-active {
		transform: translateY(0%);
		opacity: 1;
		transition: all 0.5s;
	}
`;
