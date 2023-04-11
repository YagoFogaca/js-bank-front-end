import { GlobalStyle } from './global.style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageCpf />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
