import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export const getInputTextsConfig = (newProduct) => [
	{
		id: '1',
		name: 'title',
		value: newProduct.title,
		type: 'text',
		placeholder: 'Nom du produit',
		Icon: <FaHamburger />,
		version: 'minimalist',
	},
	{
		id: '2',
		name: 'imageSource',
		value: newProduct.imageSource,
		type: 'text',
		placeholder: "Lien url de l'image",
		Icon: <BsFillCameraFill />,
		version: 'minimalist',
	},
	{
		id: '3',
		name: 'price',
		value: newProduct.price ? newProduct.price : '',
		type: 'text',
		placeholder: 'Prix',
		Icon: <MdOutlineEuro />,
		version: 'minimalist',
	},
];
