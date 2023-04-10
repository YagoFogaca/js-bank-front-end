import styled from 'styled-components';

export const SectionRegistration = styled.section`
    width: 75%;
    max-width: 650px;
    min-width: 240px;
    height: 65%;
    min-height: 450px;
    background-color: rgba(234, 234, 234, 0.85);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 15px;
`;

export const DivRegistration = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const ImgLogo = styled.img`
    width: 160px;
    @media (max-width: 490px) {
        width: 100px;
    }
`;

export const DivForm = styled.div`
    width: 100%;
`;

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
`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #000;
    pointer-events: none;
    transition: 0.5s;
`;

export const BoxBtns = styled.div`
    width: 100%;
`;

export const Btn = styled.button`
    padding: 8px 6px;
    width: 100%;
    background-color: #004af7;
    color: #fffcfc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 800;
    text-transform: uppercase;
`;
