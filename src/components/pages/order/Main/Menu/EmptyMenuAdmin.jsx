import styled from 'styled-components';
import PrimaryButton from '../../../../reusable-ui/PrimaryButton.jsx';
import { theme } from '../../../../../theme/index.js';

export default function EmptyMenuAdmin({ onClick }) {
	return (
		<EmptyMenuStyled>
			<span className="title"> Pas de produit</span>
			<span className="description">
				Cliquez ci-dessous pour le réinitialiser
			</span>
			<PrimaryButton label={'Générer de nouveaux produits'} onClick={onClick} />
		</EmptyMenuStyled>
	);
}

const EmptyMenuStyled = styled.div`
	background-color: ${theme.colors.background_white};
	box-shadow: ${theme.shadows.strong};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.title,
	.description {
		text-align: center;
		font-family: 'Amatic SC', cursive;
		color: ${theme.colors.greyBlue};
		font-size: ${theme.fonts.size.P4};
	}

	.title {
		font-weight: ${theme.fonts.weights.semiBold};
	}
	.description {
		margin-top: 20px;
	}
	button {
		cursor: pointer;
		font-size: ${theme.fonts.size.XS};
		width: auto;
		margin-top: 30px;
	}
`;
