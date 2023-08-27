import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';
import { theme } from '../../../../../../theme';

export default function SubmitMessage() {
	return (
		<SubmitMessageStyled>
			{' '}
			<div className="submit-message">
				<FiCheck className="icon-check" />
				<span className="message"> Ajouté avec succès !</span>
			</div>
		</SubmitMessageStyled>
	);
}

const SubmitMessageStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 5px;
	.icon-check {
		color: ${theme.colors.success};
		margin-left: 10px;
		width: 1em;
		height: 1em;
		border: solid 1px ${theme.colors.success};
		border-radius: 50%;
		vertical-align: middle;
	}
	.message {
		margin-left: 5px;
		font-size: ${theme.fonts.size.P1};
		color: ${theme.colors.success};
	}
`;
