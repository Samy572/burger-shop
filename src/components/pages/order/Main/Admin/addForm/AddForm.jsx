import { useContext, useState } from 'react';
import { EMPTY_PRODUCT } from '../../../../../../../enums/product';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton.jsx';
import Form from './Form';
import SubmitMessage from './../AdminPanel/SubmitMessage.jsx';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
	// state
	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
	const [isSubmitted, setIsSubmitted] = useState(false);

	// comportements
	const handleSubmit = (event) => {
		event.preventDefault();
		const newProductToAdd = {
			...newProduct,
			id: crypto.randomUUID(),
		};

		handleAdd(newProductToAdd);
		setNewProduct(EMPTY_PRODUCT);

		displaySuccessMessage();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	const displaySuccessMessage = () => {
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
		}, 2000);
	};

	// affichage
	return (
		<Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
			<>
				<PrimaryButton
					className="submit-button"
					label={'Ajouter un nouveau produit au menu'}
					version="success"
				/>
				{isSubmitted && <SubmitMessage />}
			</>
		</Form>
	);
}
