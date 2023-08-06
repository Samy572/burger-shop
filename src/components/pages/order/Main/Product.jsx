import styled from 'styled-components';

export default function Product({ title, imageSource, price }) {
	return (
		<ProductStyled className="produit">
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="info-text">
				<div className="title">{title}</div>
				<div className="description">
					<div className="price">{price}</div>
					<div className="add-button">Ajouter</div>
				</div>
			</div>
		</ProductStyled>
	);
}

const ProductStyled = styled.div`
	display: grid;
	grid-template-rows: 65% 1fr;
	background-color: red;
	height: 330px;
	width: 240px;
	padding: 20px 20px 10px 20px;
	.image {
		border: white 1px solid;
		width: 100%;
		height: auto;
	}
	img {
		margin-top: 30px;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.title {
	}
	.info-text {
		border: solid 1px black;
	}
`;
