import styled from 'styled-components';

export const Label = styled.label`
    font-size: 16px;
    color: #000;
    pointer-events: none;
    transition: 0.5s;

    @media (max-width: 490px) {
        font-size: 14px;
    }
`;
