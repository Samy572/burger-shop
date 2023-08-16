import styled from 'styled-components';

export default function AddForm() {
	return (
		<AddFormStyled>
			<div className="image-preview">image-preview</div>
			<div className="input-fields">
				<input type="text" placeholder="Nom" />
				<input type="text" placeholder="Image url" />
				<input type="text" placeholder="Prix" />
			</div>

			<button className="submit-button">submit button</button>
		</AddFormStyled>
	);
}

const AddFormStyled = styled.form`
	height: 100%;
	border: solid 1px black;
	padding: 30px 5%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: repeat(4, 1fr);
	.image-preview {
		background: red;
		grid-area: 1/1/4/2;
	}

	.input-fields {
		display: grid;
		background: blue;
		grid-area: 1/2/4/2;
	}

	.submit-button {
		display: grid;
		background: green;
		grid-area: 4/-2;
		width: 50%;
		align-items: center;
	}
`;
