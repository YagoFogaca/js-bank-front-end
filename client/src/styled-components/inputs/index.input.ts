import styled from 'styled-components';

export const BoxInput = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 0px;
    font-size: 17px;
    color: #000;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background: transparent;

    &:focus ~ label,
    &:valid ~ label {
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
