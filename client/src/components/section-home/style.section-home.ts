import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    min-height: calc((100vh - 75px) - 20px);
    padding: 5px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const SectionInfos = styled.section`
    width: 48%;
    max-width: 510px;
    padding: 10px;
    background-color: #ffffff94;
    border-radius: 10px;

    @media (max-width: 582px) {
        width: 100%;
    }
`;

export const SectionCard = styled.section`
    width: 35%;
    max-width: 350px;
    background-color: rgb(255, 255, 255);
    padding: 15px;
    border-radius: 10px;
    @media (max-width: 582px) {
        width: 100%;
    }
`;

export const H4 = styled.h4`
    font-size: 48px;
    color: #004af7;
    @media (max-width: 320px) {
        font-size: 36px;
    }
`;

export const H5 = styled.h4`
    font-size: 24px;
    @media (max-width: 320px) {
        font-size: 17px;
    }
`;

export const H6 = styled.h6`
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: 500;
    @media (max-width: 320px) {
        font-size: 17px;
    }
`;

export const SpanLogo = styled.span`
    margin-left: 8px;
    color: #004af7;
`;

export const SpanLogoVariant = styled.span`
    color: #36d98d;
`;

export const Btn = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: #36d98d;
    border: none;
    font-weight: 700;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s ease-in;
    border-radius: 10px;

    &:hover {
        opacity: 0.8;
    }
`;
