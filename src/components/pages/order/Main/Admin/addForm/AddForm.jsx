import { useContext } from 'react';
import { EMPTY_PRODUCT } from '../../../../../../../enums/product';
import Form from './Form';
import OrderContext from '../../../../../../context/OrderContext';
import SubmitButton from './SubmitButton';
import { useSuccesMessage } from '../../../../../../hooks/useDisplaySuccesMessage';

export default function AddForm() {
	// state
	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
	// Custom hook
	const { isSubmitted, displaySuccessMessage } = useSuccesMessage();
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

	// affichage
	return (
		<Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
			<SubmitButton isSubmitted={isSubmitted} />
		</Form>
	);
}
