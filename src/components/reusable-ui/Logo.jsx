import { styled } from 'styled-components';

export default function Logo() {
	return (
		<LogoStyled>
			<h1> CRAZY</h1>
			<img src="/img/F03 logo-orange.png" alt="logo-crazee-burger" />
			<h1> BURGER</h1>
		</LogoStyled>
	);
}

const LogoStyled = styled.div`
	color: white;
	display: flex;
	align-items: center;
	transform: scale(2.5);
	padding-bottom: 30px;

	h1 {
		display: flex;
		justify-content: center;
		color: #ffa01b;
		font-size: 36px;
		line-height: 1em;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		font-family: 'Amatic SC', cursive;
	}
	img {
		object-fit: contain;
		object-position: center;
		height: 60px;
		width: 80px;
		margin: 0 5px;
	}
`;
