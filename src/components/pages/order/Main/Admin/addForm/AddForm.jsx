import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
	const { handleAdd } = useContext(OrderContext);

	const newProduct = {
		id: new Date().getTime(),
		title: 'Nouveau Produit',
		imageSource:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzYGA2SwVNsiwdDN4ab82FsbZQbgmVzqFiE5nqeWe-9f64arMO3kK4Lk932uEzh922s4&usqp=CAU',
		price: 2.5,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAdd(newProduct);
	};
	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<div className="image-preview">image-preview</div>
			<div className="input-fields">
				<input type="text" placeholder="Nom" />
				<input type="text" placeholder="Image url" />
				<input type="text" placeholder="Prix" />
			</div>

			<button className="submit-button">Submit product</button>
		</AddFormStyled>
	);
}

const AddFormStyled = styled.form`
	height: 100%;
	border: solid 1px black;
	padding: 30px 5%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: repeat(4, 1fr);
	.image-preview {
		background: red;
		grid-area: 1/1/4/2;
	}

	.input-fields {
		display: grid;
		background: blue;
		grid-area: 1/2/4/2;
	}

	.submit-button {
		display: grid;
		background: green;
		grid-area: 4/-2;
		width: 50%;
		align-items: center;
	}
`;
