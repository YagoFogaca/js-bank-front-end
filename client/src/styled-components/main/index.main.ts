import styled from 'styled-components';

export const Main = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(/imgs/banner-0.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: blur(6px);
        z-index: -1;
    }
`;

export const VarianteMain = styled(Main)`
    &::before {
        background-image: none;
        filter: none;
    }
`;
