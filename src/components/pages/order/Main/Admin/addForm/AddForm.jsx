import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
	const EMPTY_PRODUCT = {
		id: '',
		title: 'New product',
		imageSource: '',
		price: 0,
	};

	const { handleAdd } = useContext(OrderContext);
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

	const newProductToAdd = {
		...newProduct,
		// Unique id
		id: crypto.randomUUID(),
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAdd(newProductToAdd);
	};

	const handleChange = (e) => {
		// dynamically proprety
		const { name, value } = e.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<div className="image-preview">image-preview</div>
			<div className="input-fields">
				<input
					name="title"
					onChange={handleChange}
					value={newProduct.title}
					type="text"
					placeholder="Nom"
				/>
				<input
					name="imageSource"
					onChange={handleChange}
					value={newProduct.imageSource}
					type="text"
					placeholder="Image url"
				/>
				<input
					name="price"
					onChange={handleChange}
					value={newProduct.price ? newProduct.price : ''}
					type="text"
					placeholder="Prix"
				/>
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
