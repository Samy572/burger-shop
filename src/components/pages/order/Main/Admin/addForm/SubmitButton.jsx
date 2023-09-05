import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import SubmitMessage from '../AdminPanel/SubmitMessage';

export default function SubmitButton({ isSubmitted }) {
	return (
		<>
			<PrimaryButton
				className="submit-button"
				label={'Ajouter un nouveau produit au menu'}
				version="success"
			/>
			{isSubmitted && <SubmitMessage />}
		</>
	);
}
