import { useContext, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import TextInput from '../../../../../reusable-ui/TextInput';

export default function AddForm() {
	const EMPTY_PRODUCT = {
		id: '',
		title: '',
		imageSource: '',
		price: 0,
	};

	const { handleAdd } = useContext(OrderContext);
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
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

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<div className="image-preview">
				{newProduct.imageSource ? (
					<img src={newProduct.imageSource} alt={newProduct.title} />
				) : (
					<div className="empty-image">Aucune image</div>
				)}
			</div>
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
				<button className="submit-button">Submit product</button>
				{isSubmited && (
					<div className="submit-message">
						<span>
							{' '}
							<FiCheck /> Ajouté avec succès !
						</span>
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
		background: green;
		grid-area: 4/-2/-1/-1;
		display: flex;
		align-items: center;

		.submmit-button {
			width: 50%;
		}
	}
`;
