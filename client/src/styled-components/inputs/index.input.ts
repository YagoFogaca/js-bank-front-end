import styled, { keyframes } from 'styled-components';
import InputMask from 'react-input-mask';

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

export const BoxInputs = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

// Pode tirar
export const BoxInput = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 17px;
    color: #000;
    margin: 5px 0 15px 0;
    padding: 6px 8px;
    border: 1px solid rgb(0 0 0 / 51%);
    border-radius: 6px;
    outline: none;

    &.error {
        animation: ${shake} 0.5s;
        border: 1px solid rgb(253, 23, 23);
    }

    &:-internal-autofill-selected {
        background-color: rgb(253, 253, 253) !important;
    }
`;

export const VarianteInput = styled(Input)`
    width: 98%;
`;

export const StyledNumberFormat = styled(InputMask)`
    width: 100%;
    font-size: 17px;
    color: #000;
    margin: 5px 0 15px 0;
    padding: 6px 8px;
    border: 1px solid rgb(0 0 0 / 51%);
    border-radius: 6px;
    outline: none;

    &.error {
        animation: ${shake} 0.5s;
        border: 1px solid rgb(253, 23, 23);
    }

    &:-internal-autofill-selected {
        background-color: rgb(253, 253, 253) !important;
    }
`;
