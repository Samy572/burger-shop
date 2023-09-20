import styled from 'styled-components';
import Card from '../../../../reusable-ui/Card';
import { theme } from '../../../../../theme';
import { formatPrice } from '../../../../../utils/math';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import EmptyMenuClient from './EmptyMenuClient.jsx';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import { checkIfProductIsClicked } from './helper';
import {
	EMPTY_PRODUCT,
	IMAGE_COMMING_SOON,
} from '../../../../../../enums/product';
import { isEmpty } from '../../../../../utils/array';

export default function Menu() {
	const {
		menu,
		isModeAdmin,
		handleDelete,
		resetMenu,
		productSelected,
		setProductSelected,
		handleAddToBasket,
		handleDeleteBasketProduct,
		handleProductSelected,
	} = useContext(OrderContext);
	// state

	// comportements (gestionnaires d'événement ou "event handlers")
	const handleCardDelete = (event, idProductToDelete) => {
		event.stopPropagation();
		handleDelete(idProductToDelete);
		handleDeleteBasketProduct(idProductToDelete);
		idProductToDelete === productSelected.id &&
			setProductSelected(EMPTY_PRODUCT);
	};

	const handleAddButton = (event, idProductToAdd) => {
		event.stopPropagation();
		handleAddToBasket(idProductToAdd);
	};

	// affichage
	if (isEmpty(menu)) {
		if (!isModeAdmin) return <EmptyMenuClient />;
		return <EmptyMenuAdmin onReset={resetMenu} />;
	}

	return (
		<MenuStyled className="menu">
			{menu.map(({ id, title, imageSource, price }) => {
				return (
					<Card
						key={id}
						title={title}
						imageSource={imageSource ? imageSource : IMAGE_COMMING_SOON}
						leftDescription={formatPrice(price)}
						hasDeleteButton={isModeAdmin}
						onDelete={(event) => handleCardDelete(event, id)}
						onClick={isModeAdmin ? () => handleProductSelected(id) : null}
						isHoverable={isModeAdmin}
						isSelected={checkIfProductIsClicked(id, productSelected.id)}
						onAdd={(event) => handleAddButton(event, id)}
					/>
				);
			})}
		</MenuStyled>
	);
}

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-row-gap: 60px;
	background-color: ${theme.colors.background_white};
	overflow-y: scroll;
	padding: 50px 50px 150px;
	justify-items: center;
	box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 20%) inset;
	overflow-y: scroll;
`;
