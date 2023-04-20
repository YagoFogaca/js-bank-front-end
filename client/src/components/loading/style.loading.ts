import styled, { keyframes } from 'styled-components';

const AnimationLoading = keyframes`
to {
     transform: rotate(1turn);
   }
`;

export const LoadingDiv = styled.div`
    width: 65px;
    height: 65px;
    margin: 0 auto;
    border: 6px solid #8b8e8fb2;
    border-top-color: #36d98d;
    border-radius: 100%;
    animation: ${AnimationLoading} 2s infinite;
`;
