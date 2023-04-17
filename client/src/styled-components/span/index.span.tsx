import styled from 'styled-components';
import { PropsSpanError } from '../../utils/types/index.props';

export const SpanError = styled.span<PropsSpanError>`
    display: ${props => (props.visible ? 'block' : 'none')};
    margin: 10px 0;
    font-weight: 600;
    font-size: 14px;
    color: #fd1717;
`;

export const VarianteSpanError = styled(SpanError)`
    margin: 25px 0;
`;
