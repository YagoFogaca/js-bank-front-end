import { GlobalStyle } from './global.style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';
import { PagePersonalInfo } from './pages/personal-info';

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageCpf />} />
                    <Route
                        path="/personal-info"
                        element={<PagePersonalInfo />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
