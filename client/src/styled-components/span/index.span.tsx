import styled from 'styled-components';
import { PropsSpanError } from '../../utils/types/index.props';

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
