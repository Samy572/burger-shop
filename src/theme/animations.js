import { css, keyframes } from 'styled-components';
import { theme } from '.';

export const fadeInFromRight = keyframes`

from{
	position: absolute;
	z-index: -1;
	opacity: 0;
	transform: translateX(100%);
}
to{
	opacity: 1;
	transform: translateX(0);
}
`;

export const adminAnimation = css`
	.admin-appear {
		transform: translateY(100%);
		opacity: 0.1;
	}
	.admin-appear-active {
		transform: translateY(0%);
		opacity: 1;
		transition: all ${theme.animation.speed.slow};
	}
`;

// Pour le premier élément ajouter la classe appear true à transition group
export const basketAnimation = css`
	.animation-basket-appear {
		.transition {
			opacity: 0;
			transform: translateX(100px);
		}
	}

	.animation-basket-appear-active {
		.transition {
			transition: ${theme.animation.speed.quick};
			opacity: 1;
			transform: translateX(0);
		}
	}

	// Phase de mounting
	.animation-basket-enter {
		.transition {
			opacity: 0;
			transform: translateX(100px);
		}
	}
	.animation-basket-enter-active {
		.transition {
			opacity: 1;
			transform: translateX(0);
			transition: ${theme.animation.speed.quick};
		}
	}

	// Phase de unmonting

	.animation-basket-exit {
		.transition {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.animation-basket-exit-active {
		opacity: 0;
		transform: translateX(-100%);
		transition: ${theme.animation.speed.quick};
	}
`;

export const menuAnimation = css`
	// Mounting
	.animation-menu-enter {
		opacity: 0.1;
		transform: translateX(-120px);
	}

	.animation-menu-enter-active {
		opacity: 1;
		transform: translateX(0);
		transition: all ${theme.animation.speed.quick} ease-out;
	}

	// Unmouting

	.animation-menu-exit {
		opacity: 1;
		transform: translateY(0px);
	}

	.animation-menu-exit-active {
		opacity: 0.1;
		transition: all ${theme.animation.speed.quick} ease-out;
	}
`;

export const fadeInFromRight = keyframes`
from{
		transform: translateX(100%);
		opacity: 0;

}

to{
		transform: translateX(0%);
		opacity: 1;
		transition: all ${theme.animation.speed.slow};

}
`;
