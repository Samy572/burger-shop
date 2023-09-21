import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

export default function CasinoEffect({ count, className }) {
	return (
		<TransitionGroup
			component={CasinoEffectStyled}
			className={'transition-group'}
		>
			<CSSTransition
				classNames={'count-animated'}
				timeout={{ enter: 300, exit: 300 }}
				key={count}
			>
				<span className={className}>{count}</span>
			</CSSTransition>
		</TransitionGroup>
	);
}

const CasinoEffectStyled = styled.div`
	/* border: solid 1px red; */
	user-select: none;
	width: max-content;
	display: block;
	overflow-y: hidden;
	position: relative;
	span {
		display: inline-block;
	}

	// Mounting
	.count-animated-enter {
		transform: translateY(100%);
		/* background-color: red; */
	}
	.count-animated-enter-active {
		transform: translateY(0%);
		transition: 0.3s;
	}

	// Unmounting

	.count-animated-exit {
		transform: translateY(0%);
		position: absolute;
		bottom: 0px;
		right: 0;
		/* background-color: white; */
	}
	.count-animated-exit-active {
		transform: translateY(-120%);
		transition: 0.3s;
	}
`;
