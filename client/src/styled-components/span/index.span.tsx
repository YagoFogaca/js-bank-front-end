import styled from 'styled-components';
import { PropsSpanError } from '../../utils/types/index.props';

export const SpanError = styled.span<PropsSpanError>`
    display: block;
    margin: 25px 0;
    font-weight: 600;
    font-size: 14px;
    color: #fd1717;
    opacity: ${props => (props.visible ? 1 : 0)};
    transition: all 0.3s ease-in;
`;
