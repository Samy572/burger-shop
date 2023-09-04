import styled from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import ImagePreview from '../AdminPanel/ImagePreview';
import TextInput from '../../../../../reusable-ui/TextInput';
import { getInputTextsConfig } from '../AdminPanel/getInputTextsConfig';
import SubmitMessage from '../AdminPanel/SubmitMessage';
import { theme } from '../../../../../../theme';

export default function EditForm() {
	// State
	const { productSelected, setProductSelected, handleEdit, titleEditRef } =
		useContext(OrderContext);
	const inputTexts = getInputTextsConfig(productSelected);

	// Comportement
	const handleChange = (e) => {
		const { name, value } = e.target;
		const productBeingUpdate = {
			...productSelected,
			[name]: value,
		};
		setProductSelected(productBeingUpdate);
		handleEdit(productBeingUpdate);
	};

	return (
		<EditFormStyled>
			<ImagePreview
				imageSource={productSelected.imageSource}
				title={productSelected.title}
			/>
			<div className="input-fields">
				{inputTexts.map((input) => {
					return (
						<TextInput
							key={input.id}
							{...input}
							onChange={handleChange}
							version="minimalist"
							ref={input.name === 'title' ? titleEditRef : null}
						/>
					);
				})}
			</div>
			<div className="submit">
				<span className="sentence">
					Cliquer sur un produit du menu pour le modifier {''}{' '}
					<span className="live-update">En temps réel</span>
				</span>
			</div>
		</EditFormStyled>
	);
}

const EditFormStyled = styled.div`
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

		.sentence{
			color:${theme.colors.primary};
			font-size: ${theme.fonts.size.SM};
			.live-update{
				text-decoration: underline;
			}
		
		}
	}
`;
