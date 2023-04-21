import styled, { keyframes } from 'styled-components';

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
    background: transparent;

    &.error {
        animation: ${shake} 0.5s;
        border: 1px solid rgb(253, 23, 23);
    }

    &::-webkit-datetime-edit-fields-wrapper,
    &::-webkit-datetime-edit-text {
        color: transparent !important;
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
    }

    &:focus::-webkit-datetime-edit-fields-wrapper,
    &:valid::-webkit-datetime-edit-fields-wrapper {
        color: #000 !important;
    }

    &:focus::-webkit-calendar-picker-indicator,
    &:valid::-webkit-calendar-picker-indicator {
        display: block;
    }
`;

export const VarianteInput = styled(Input)`
    width: 98%;
`;

// Pode tirar
export const VarianteInput2 = styled.input`
    width: 100%;
    padding: 10px 0px;
    font-size: 17px;
    color: #000;
    margin-bottom: 15px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background: transparent;

    &:focus ~ label {
        top: -20px;
        left: 0;
        color: #000;
        font-size: 12px;
    }

    &::-webkit-datetime-edit-fields-wrapper,
    &::-webkit-datetime-edit-text {
        color: transparent !important;
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
    }

    &:focus::-webkit-datetime-edit-fields-wrapper,
    &:valid::-webkit-datetime-edit-fields-wrapper {
        color: #000 !important;
    }

    &:focus::-webkit-calendar-picker-indicator,
    &:valid::-webkit-calendar-picker-indicator {
        display: block;
    }
`;
