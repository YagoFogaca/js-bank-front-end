import styled from 'styled-components';
import { PropsVarianteButton } from '../../utils/types/index.props';

export const BoxBtns = styled.div`
    width: 100%;
`;

export const Btn = styled.button`
    padding: 8px 6px;
    margin: 20px 0;
    width: 100%;
    background-color: rgba(0 74 247 / 83%);
    color: #fffcfc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 800;
    text-transform: uppercase;
    transition: all 0.3s ease-in;

    &:hover {
        background-color: rgba(0 74 247 / 100%);
    }

    &.error {
        background-color: rgba(0 74 247 / 45%);
        cursor: no-drop;
    }
`;

export const VarianteBoxBtns = styled(BoxBtns)`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const VarianteButton = styled(Btn)<PropsVarianteButton>`
    width: 48%;
    background-color: ${props =>
        props.color ? 'rgba(54 217 141)' : 'rgba(0 74 247 / 83%)'};
    color: ${props => (props.color ? 'rgb(58 58 58);' : '#fffcfc')};

    &:hover {
        background-color: ${props =>
            props.color ? 'rgba(54 217 141 / 50%)' : 'rgba(0 74 247 / 100%)'};
    }

    @media (max-width: 793px) {
        width: 100%;
    }
`;
