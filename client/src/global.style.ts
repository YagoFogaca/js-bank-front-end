import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body,
    #root {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
