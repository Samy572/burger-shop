import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../data/fakeMenu';

export default function Menu() {
	const [menu, setmenu] = useState(fakeMenu2);

	return (
		<MenuStyled>
			{menu.map((produit, i) => {
				return (
					<div key={i} className="produit">
						{produit.title}
					</div>
				);
			})}
		</MenuStyled>
	);
}

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-row-gap: 60px;
	background-color: pink;
	overflow-y: scroll;
	padding: 50px 50px 150px;
	justify-items: center;
	flex-wrap: wrap;
	.produit {
		background-color: red;
		height: 330px;
		width: 240px;
	}
`;
