import styled from 'styled-components';
import { PropsSpanError } from '../../utils/types/index.props';

// Trocar nome da pasta para text-error

// Pode tirar
export const SpanError = styled.span<PropsSpanError>`
    display: ${props => (props.visible ? 'block' : 'none')};
    margin: 10px 0;
    font-weight: 600;
    font-size: 14px;
    color: #fd1717;
`;

// Pode tirar
export const VarianteSpanError = styled(SpanError)`
    margin: 25px 0;
`;

export const TextError = styled.span<PropsSpanError>`
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #fd1717;
    transition: all 0.3s ease-in;
    opacity: ${props => (props.visible ? 1 : 0)};
`;

export const TextErrorVariante = styled(TextError)`
    text-align: center;
    font-size: 16px;
    opacity: 1;
`;
