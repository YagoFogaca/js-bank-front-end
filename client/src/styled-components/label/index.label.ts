import styled from 'styled-components';

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #000;
    pointer-events: none;
    transition: 0.5s;

    @media (max-width: 490px) {
        font-size: 14px;
    }
`;
