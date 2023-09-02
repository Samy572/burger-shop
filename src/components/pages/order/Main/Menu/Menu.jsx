import styled from 'styled-components';
import Card from '../../../../reusable-ui/Card';
import { theme } from '../../../../../theme';
import { formatPrice } from '../../../../../utils/math';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import EmptyMenuClient from './EmptyMenuClient.jsx';
import EmptyMenuAdmin from './EmptyMenuAdmin';
export default function Menu() {
	const { menu, isModeAdmin, resetMenu, handleDelete, setProductSelected } =
		useContext(OrderContext);
	const IMAGE_BY_DEFAULT = '/img/coming-soon.png';

	const handleClick = (idProductSelected) => {
		const productClickedOn = menu.find((el) => el.id === idProductSelected);
		setProductSelected(productClickedOn);
	};

	if (menu.length === 0 && isModeAdmin)
		return <EmptyMenuAdmin onClick={resetMenu} />;

	if (menu.length === 0 && !isModeAdmin) return <EmptyMenuClient />;

	return (
		// Map destructuring menu + hydratation du component
		<MenuStyled>
			{menu.map(({ id, imageSource, price, title }) => {
				return (
					<Card
						key={id}
						title={title}
						imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
						leftDescription={formatPrice(price)}
						hasDeleteButton={isModeAdmin}
						onDelete={() => handleDelete(id)}
						onClick={() => handleClick(id)}
						isHoverable={isModeAdmin}
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
