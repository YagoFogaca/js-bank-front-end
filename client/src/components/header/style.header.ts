import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    height: 75px;
    position: sticky;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const VarianteHeaderStyle = styled(HeaderStyle)`
    padding: 20px;
    background: rgba(0, 74, 247, 0.83);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ImgLogo = styled.img`
    width: 150px;

    @media (max-width: 320px) {
        width: 105px;
    }
`;

export const UlMenu = styled.ul`
    list-style: none;

    & a {
        text-decoration: none;
    }
`;

export const VarianteUlMenu = styled(UlMenu)`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & a {
        color: rgb(255, 255, 255);
    }
`;

export const SpanOption = styled.span`
    font-size: 18px;
    color: #004af7;
    font-weight: 600;
`;

export const VarianteSpanOption = styled(SpanOption)`
    font-size: 20px;
    color: rgb(255, 255, 255);
`;
