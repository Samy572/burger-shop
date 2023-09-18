import styled from 'styled-components';
import Card from '../../../../reusable-ui/Card';
import { theme } from '../../../../../theme';
import { formatPrice } from '../../../../../utils/math';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import EmptyMenuClient from './EmptyMenuClient.jsx';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import { checkIfProductIsClicked } from './helper';
import { IMAGE_COMMING_SOON } from '../../../../../../enums/product';
import { findInArray } from '../../../../../utils/array';
export default function Menu() {
	const {
		menu,
		isModeAdmin,
		resetMenu,
		handleDelete,
		productSelected,
		setProductSelected,
		setisCollapsed,
		setcurrentTabSelected,
		titleEditRef,
		handleAddToBasket,
	} = useContext(OrderContext);

	const handleClick = async (idProductSelected) => {
		if (isModeAdmin) setisCollapsed(false);
		setcurrentTabSelected('edit');
		const productClickedOn = findInArray(idProductSelected, menu);
		await setProductSelected(productClickedOn);
		titleEditRef.current.focus();
	};

	if (menu.length === 0 && isModeAdmin)
		return <EmptyMenuAdmin onClick={resetMenu} />;

	if (menu.length === 0 && !isModeAdmin) return <EmptyMenuClient />;

	const handleAddButton = (event, idProductToAdd) => {
		event.stopPropagation();
		handleAddToBasket(idProductToAdd);
	};

	return (
		// Map destructuring menu + hydratation du component
		<MenuStyled>
			{menu.map(({ id, imageSource, price, title }) => {
				return (
					<Card
						key={id}
						title={title}
						imageSource={imageSource ? imageSource : IMAGE_COMMING_SOON}
						leftDescription={formatPrice(price)}
						isSelected={() => checkIfProductIsClicked(id, productSelected.id)}
						onDelete={() => handleDelete(id)}
						onClick={() => handleClick(id)}
						hasDeleteButton={isModeAdmin}
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
