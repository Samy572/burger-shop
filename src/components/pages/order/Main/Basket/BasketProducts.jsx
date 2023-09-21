import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMMING_SOON } from '../../../../../../enums/product';
import { findObjectById } from '../../../../../utils/array';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import { checkIfProductIsClicked } from '../Menu/helper';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { basketAnimation } from '../../../../../theme/animations';

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
							classNames={'animation-basket'}
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
	${basketAnimation}
`;
