import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family:  'Open Sans', sans-serif;
    }

    body,
    #root {
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #root {
        padding: 10px 0;
    }
`;
