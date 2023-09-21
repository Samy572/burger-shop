import styled, { css } from 'styled-components';
import { theme } from '../../../../../../theme';
import { MdDeleteForever } from 'react-icons/md';
import { formatPrice } from '../../../../../../utils/math';
import CasinoEffect from '../../../../../reusable-ui/CasinoEffect';

export default function BasketCard({
	title,
	price,
	quantity,
	imageSource,
	className,
	isClickable,
	onClick,
	onDelete,
	isSelected,
}) {
	return (
		<BasketCardStyled
			className={className}
			isClickable={isClickable}
			onClick={onClick}
			isSelected={isSelected}
		>
			<div className="delete-button" onClick={onDelete}>
				<MdDeleteForever className="icon" />
			</div>
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="text-info">
				<div className="left-info">
					<div className="title">
						<span>{title}</span>
					</div>
					<span className="price">{formatPrice(price)}</span>
				</div>
				<div className="quantity">
					<CasinoEffect count={`x ${quantity}`} />
				</div>
			</div>
		</BasketCardStyled>
	);
}

const BasketCardStyled = styled.div`
	cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'auto')};

	margin-right: 10px;
	box-sizing: border-box;
	height: 86px;
	padding: 8px 10px;
	display: grid;
	align-items: center;
	grid-template-columns: 30% 1fr;
	overflow-y: hidden;
	margin-bottom: 20px;
	cursor: pointer;
	border-radius: ${theme.borderRadius.round};
	background: ${theme.colors.white};
	box-shadow: ${theme.shadows.cardBasket};
	position: relative;

	.delete-button {
		display: none;
		z-index: 1;
	}

	.image {
		box-sizing: border-box;
		height: 70px;
		overflow: hidden;
		display: flex;
		align-items: center;
		img {
			padding: 5px;
			box-sizing: border-box;
			height: 100%;
			width: 100%;
			object-fit: contain;
		}
	}

	.text-info {
		user-select: none;
		box-sizing: border-box;
		/* background: green; */
		/* border: 1px solid green; */
		display: grid;
		grid-template-columns: 70% 1fr;
		font-size: ${theme.fonts.size.P0};
		color: ${theme.colors.primary};

		.left-info {
			display: grid;
			grid-template-rows: 60% 40%;
			margin-left: 21px;
			/* align-items: center; */
			.title {
				overflow: hidden;

				display: flex;
				align-items: center;
				/* background: yellow; */
				font-family: ${theme.fonts.family.stylish};
				font-size: ${theme.fonts.size.P3};
				font-weight: ${theme.fonts.weights.bold};
				color: ${theme.colors.dark};
				min-width: 0;
				span {
					overflow: hidden;
					/* width: 100%; */
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}

			.price {
				/* background: blue; */
				font-size: ${theme.fonts.size.SM};
				font-weight: ${theme.fonts.weights.medium};
				font-family: ${theme.fonts.family.openSans};
				/* color: ${theme.colors.white}; */
			}
		}

		.quantity {
			position: absolute;
			right: 10px;
			top: -8px;
			font-weight: ${theme.fonts.weights.medium};

			font-size: ${theme.fonts.size.SM};
		}
	}
	&:hover {
		.delete-button {
			position: absolute;
			top: -25px;
			right: 0;
			bottom: 0;
			width: 76px;
			border-top-right-radius: ${theme.borderRadius.round};
			border-bottom-right-radius: ${theme.borderRadius.round};
			padding: 0px;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			background: ${theme.colors.red};
			color: ${theme.colors.white};
			cursor: pointer;

			.icon {
				position: absolute;
				width: ${theme.fonts.size.P3};
				height: ${theme.fonts.size.P3};
			}
		}
	}
	${({ isClickable, isSelected }) =>
		isClickable && isSelected && selectedStyled}
`;

const selectedStyled = css`
	background: ${theme.colors.primary};
	.price,
	.quantity {
		color: ${theme.colors.white};
	}
`;
