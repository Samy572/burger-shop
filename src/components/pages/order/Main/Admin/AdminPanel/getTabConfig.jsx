import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import AddForm from '../addForm/AddForm';
import EditForm from '../addForm/EditForm';

export const getTabsConfig = (currentTabSelected) => [
	{
		index: 'add',
		label: 'Ajouter un produit',
		Icon: <AiOutlinePlus />,
		className: currentTabSelected === 'add' ? 'is-active' : '',
		Content: <AddForm />,
	},
	{
		index: 'edit',
		label: 'Modifier un produit',
		Icon: <MdModeEditOutline />,
		className: currentTabSelected === 'edit' ? 'is-active' : '',
		Content: <EditForm />,
	},
];
