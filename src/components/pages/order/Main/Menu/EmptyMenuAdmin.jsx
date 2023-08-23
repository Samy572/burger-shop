export default function EmptyMenuAdmin({ onReset }) {
	return (
		<div>
			<span> Pas de produit</span>
			<button onClick={onReset}>Génerer de nouveaux produits </button>
		</div>
	);
}
