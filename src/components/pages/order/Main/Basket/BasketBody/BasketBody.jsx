import { useContext } from 'react';
import { isEmpty } from '../../../../../../utils/array';
import BasketProducts from './BasketProducts.jsx';
import EmptyBasket from './EmptyBasket';
import OrderContext from '../../../../../../context/OrderContext';

export default function BasketBody() {
	const { basket } = useContext(OrderContext);
	return (
		<>
			{isEmpty(basket) ? <EmptyBasket /> : <BasketProducts products={basket} />}
		</>
	);
}
