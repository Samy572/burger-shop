export default function Product({ title, imageSource, price }) {
	return (
		<div className="produit">
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="info-text">
				<div className="description">
					<div className="title">{title}</div>
					<div className="price">{price}</div>
					<div className="add-button">Ajouter</div>
				</div>
			</div>
		</div>
	);
}
