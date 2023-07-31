import styled from 'styled-components';

export default function Button({ Icon, label }) {
	return (
		<PrimaryStyledButton>
			<span>{label}</span>
			{Icon && Icon}
		</PrimaryStyledButton>
	);
}

const PrimaryStyledButton = styled.button`
		
		width: 100%;
		border: 1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		white-space: nowrap;
		text-decoration: none;
		line-height: 1;
		padding:18px 24px;
		border-radius: 5px;
		font-size:15px;
		font-weight:800;
		color: white;
		background-color: #ff9f1b;
		border : 1px solid #ff9f1b;

		&:hover:not(:disabled) {
			background-color: #fff;
			color: #ff9f1b;
			border: 1px solid #ff9f1b;
			transition: all 200ms ease-out;
		}
		&:active{
			color#fff;
			background-color: #ff9f1b;
			border: 1px solid #ff9f1b;
		}
		&:disabled{
			opacity:0.5;
			cursor: not-allowed;
		}

	
`;
