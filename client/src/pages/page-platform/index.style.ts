import styled from 'styled-components';

export const SectionPlatform = styled.section`
    width: 60%;
    max-width: 1024px;
    min-height: calc((100vh - 75px) - 25px);
    margin: 10px auto;
    padding: 15px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const CardPlatform = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: rgb(247, 247, 247);
    padding: 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 25px;
`;

export const VariantCardPlatform = styled(CardPlatform)`
    justify-content: space-evenly;
`;

export const DivSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`;

export const BtnSection = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;
    padding: 10px;
`;

export const H4Section = styled.h4`
    font-size: 17px;
    font-weight: 600;
`;

export const PSection = styled.h4`
    font-weight: 500;
`;
