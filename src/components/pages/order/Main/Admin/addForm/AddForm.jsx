import { useContext, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import TextInput from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton.jsx';
import ImagePreview from '../AdminPanel/ImagePreview';

export const EMPTY_PRODUCT = {
	id: '',
	title: '',
	imageSource: '',
	price: 0,
};

export default function AddForm() {
	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
	const [isSubmited, setisSubmited] = useState(false);
	// const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

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

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<ImagePreview
				imageSource={newProduct.imageSource}
				title={newProduct.title}
			/>
			<div className="input-fields">
				<TextInput
					name="title"
					onChange={handleChange}
					value={newProduct.title}
					type="text"
					placeholder="Nom du produit"
					Icon={<FaHamburger />}
					version={'minimalist'}
				/>
				<TextInput
					name="imageSource"
					onChange={handleChange}
					value={newProduct.imageSource}
					type="text"
					placeholder="Lien url de l'image"
					Icon={<BsFillCameraFill />}
					version={'minimalist'}
				/>
				<TextInput
					name="price"
					onChange={handleChange}
					value={newProduct.price ? newProduct.price : ''}
					type="text"
					placeholder="Prix"
					Icon={<MdOutlineEuro />}
					version={'minimalist'}
				/>
			</div>

			<div className="submit">
				<PrimaryButton
					label={'Ajouter un nouveau produit au menu'}
					version={'success'}
				/>
				{isSubmited && (
					<div className="submit-message">
						<FiCheck className="icon-check" />
						<span className="message"> Ajouté avec succès !</span>
					</div>
				)}
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

	.image-preview {
		grid-area: 1/1/4/2;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: center;
		}
	}

	.empty-image {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid ${theme.colors.greyLight};
		line-height: 1.5;
		color: ${theme.colors.greySemiDark};
		border-radius: ${theme.borderRadius.round};
	}

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
		position: relative;
		top: 3px;
		.icon-check {
			color: ${theme.colors.success};
			margin-left: 10px;
			width: 1em;
			height: 1em;
			border: solid 1px ${theme.colors.success};
			border-radius: 50%;
			vertical-align: middle;
		}
		.message {
			margin-left: 5px;
			font-size: ${theme.fonts.size.P1};
			color: ${theme.colors.success};
		}
	}
`;
