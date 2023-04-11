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
