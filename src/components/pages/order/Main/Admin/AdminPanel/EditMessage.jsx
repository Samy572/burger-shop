import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export default function EditInfoMessage() {
	return (
		<EditInfoMessageStyled>
			<span className="sentence">
				<span className="live-update">En temps réel</span>
			</span>
		</EditInfoMessageStyled>
	);
}

const EditInfoMessageStyled = styled.div`
	.sentence {
		color: ${theme.colors.primary};
		font-size: ${theme.fonts.size.SM};
		.live-update {
			text-decoration: underline;
		}
	}
`;
