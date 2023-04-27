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

export const SpanOption = styled.span`
    font-size: 18px;
    color: #004af7;
    font-weight: 600;
`;
