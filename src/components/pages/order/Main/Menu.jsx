import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../data/fakeMenu';
import { theme } from '../../../../theme';
import Product from './Product';

export default function Menu() {
	const [menu, setmenu] = useState(fakeMenu2);

	return (
		<MenuStyled>
			{menu.map((produit, i) => {
				return (
					<Product
						key={i}
						title={produit.title}
						imageSource={produit.imageSource}
						price={produit.price}
					/>
				);
			})}
		</MenuStyled>
	);
}

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-row-gap: 60px;
	background-color: ${theme.colors.background_white};
	overflow-y: auto;
	padding: 50px 50px 150px;
	justify-items: center;
	flex-wrap: wrap;
	box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 20%) inset;
	.produit {
		background-color: red;
		height: 330px;
		width: 240px;
		.image {
			border: fuchsia 2px solid;
			width: 100px;
			height: auto;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.description {
			border: solid 2px fuchsia;
		}
	}
`;
