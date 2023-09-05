import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext.jsx';
import Form from './Form';
import EditInfoMessage from './EditInfoMessage.jsx';

export default function EditForm() {
	// state
	const { productSelected, setProductSelected, handleEdit, titleEditRef } =
		useContext(OrderContext);

	// comportements 
	const handleChange = (event) => {
		const { name, value } = event.target;

		const productBeingUpdated = {
			...productSelected, 
			[name]: value,
		};

		setProductSelected(productBeingUpdated); // update le formulaire
		handleEdit(productBeingUpdated, event); // update le menu
	};

	// affichage
	return (
		<Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
			<EditInfoMessage />
		</Form>
	);
}
