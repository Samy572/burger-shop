import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Profile({ username }) {
	return (
		<ProfileStyled>
			<div className="info">
				<p>
					Hey, <b>{username}</b>
				</p>
				<Link to="/">
					<div className="description">
						<small>Se déconnecter</small>
					</div>
				</Link>
			</div>
			<div className="picture">
				<BsPersonCircle />
			</div>
		</ProfileStyled>
	);
}

const ProfileStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 100px;

	.info {
		text-align: center;
		margin-right: 10px;
		p {
			margin: 0;
			color: ${theme.colors.greyBlue};
			b {
				color: ${theme.colors.primary};
			}
		}
		.description {
			&:hover {
				text-decoration: underline;
				color: ${theme.colors.greyDark};
			}
			small {
				font-size: ${theme.fonts.size.XXS};
				color: ${theme.colors.greyBlue};
				font-weight: ${theme.fonts.weight.medium};
				text-decoration: none;
				position: relative;
				bottom: 2px;
			}
		}
	}

	.picture {
		height: auto;
		display: flex;
		height: 100%;
		color: ${theme.colors.greyBlue};
		font-size: ${theme.fonts.size.P4};
	}
`;
