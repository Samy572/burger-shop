import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMMING_SOON } from '../../../../../../enums/product';
import { findObjectById } from '../../../../../utils/array';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import { checkIfProductIsClicked } from '../Menu/helper';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function BasketProducts() {
	const {
		basket,
		isModeAdmin,
		menu,
		handleDeleteBasketProduct,
		handleProductSelected,
		productSelected,
	} = useContext(OrderContext);

	const handleOnDelete = (event, productToDelete) => {
		event.stopPropagation();
		handleDeleteBasketProduct(productToDelete);
	};

	return (
		<BasketProductsStyled>
			<TransitionGroup>
				{basket.map((basketProduct) => {
					const menuProduct = findObjectById(basketProduct.id, menu);
					return (
						<CSSTransition
							classNames={'animation'}
							key={basketProduct.id}
							timeout={500}
							appear={true}
						>
							<div className="basket-card">
								<BasketCard
									{...menuProduct}
									imageSource={
										menuProduct.imageSource
											? menuProduct.imageSource
											: IMAGE_COMMING_SOON
									}
									quantity={basketProduct.quantity}
									onDelete={(event) => handleOnDelete(event, basketProduct.id)}
									isClickable={isModeAdmin}
									onClick={
										isModeAdmin
											? () => handleProductSelected(basketProduct.id)
											: null
									}
									className={'transition'}
									isSelected={checkIfProductIsClicked(
										basketProduct.id,
										productSelected.id
									)}
								/>
							</div>
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</BasketProductsStyled>
	);
}

const BasketProductsStyled = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;

	// Pour le premier élément ajouter la classe appear true à transition group

	.animation-appear {
		.transition {
			opacity: 0;
			transform: translateX(100px);
		}
	}

	.animation-appear-active {
		.transition {
			transition: 0.25s;
			opacity: 1;
			transform: translateX(0);
		}
	}

	// Phase de mounting
	.animation-enter {
		.transition {
			opacity: 0;
			transform: translateX(100px);
		}
	}
	.animation-enter-active {
		.transition {
			opacity: 1;
			transform: translateX(0);
			transition: 0.25s;
		}
	}

	// Phase de unmonting

	.animation-exit {
		.transition {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.animation-exit-active {
		opacity: 0;
		transform: translateX(-100%);
		transition: 0.25s;
	}

	.basket-card {
		margin: 10px 16px;
		box-sizing: border-box;
		:first-child {
			margin-top: 20px;
		}
		:last-child {
			margin-bottom: 20px;
		}
	}
`;
