import { GlobalStyle } from './global.style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';
import { PagePersonalInfo } from './pages/personal-info';
import { PageEmail } from './pages/page-email';
import { PageResidence } from './pages/page-residence';

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
                    <Route path="/email" element={<PageEmail />} />

                    <Route path="/recidemce" element={<PageResidence/>} />

                </Routes>
            </BrowserRouter>
        </>
    );
}
