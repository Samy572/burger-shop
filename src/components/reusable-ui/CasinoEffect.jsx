import styled from 'styled-components';

export default function CasinoEffect({ count, className }) {
	return <CasinoEffectStyled className={className}>{count}</CasinoEffectStyled>;
}

const CasinoEffectStyled = styled.span``;
