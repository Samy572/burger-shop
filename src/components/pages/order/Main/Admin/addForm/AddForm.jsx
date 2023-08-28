import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import TextInput from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton.jsx';
import ImagePreview from '../AdminPanel/ImagePreview';
import SubmitMessage from '../AdminPanel/SubmitMessage';
import { getInputTextsConfig } from '../AdminPanel/getInputTextsConfig.jsx';

export default function AddForm() {
	const { handleAdd, newProduct, setNewProduct, EMPTY_PRODUCT } =
		useContext(OrderContext);
	const [isSubmited, setisSubmited] = useState(false);

	const newProductToAdd = {
		...newProduct,
		// Unique id
		id: crypto.randomUUID(),
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAdd(newProductToAdd);
		setNewProduct(EMPTY_PRODUCT);
		displaySucessMessage();
	};
	const displaySucessMessage = () => {
		setisSubmited(true);
		setTimeout(() => {
			setisSubmited(false);
		}, 2000);
	};

	const handleChange = (e) => {
		// dynamically proprety name
		const { name, value } = e.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	const inputTexts = getInputTextsConfig(newProduct);

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<ImagePreview
				imageSource={newProduct.imageSource}
				title={newProduct.title}
			/>
			<div className="input-fields">
				{inputTexts.map((input) => {
					return (
						<TextInput
							key={input.id}
							{...input}
							onChange={handleChange}
							version="minimalist"
						/>
					);
				})}
			</div>
			<div className="submit">
				<PrimaryButton
					label={'Ajouter un nouveau produit au menu'}
					version={'success'}
				/>
				{isSubmited && <SubmitMessage />}
			</div>
		</AddFormStyled>
	);
}

const AddFormStyled = styled.form`
	height: 100%;
	/* border: solid 1px black; */
	width: 70%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-column-gap: 20px;
	grid-template-rows: repeat(4, 1fr);
	grid-row-gap: 8px;
	padding-top: 10px;
	margin-left: 50px;

	.input-fields {
		display: grid;
		grid-area: 1/2/4/2;
		grid-row-gap: 8px;
	}
	.submit {
		display: grid;
		grid-area: 4/-2/-1/-1;
		display: flex;
		align-items: center;
		top: 3px;
	}
`;
