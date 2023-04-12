import { GlobalStyle } from './global.style';
import { ContextProvider } from './contexts/user.context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';
import { PagePersonalInfo } from './pages/personal-info';
import { PageEmail } from './pages/page-email';
import { PageResidencia } from './pages/page-residencia';

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route path="/" element={<PageCpf />} />
                        <Route
                            path="/personal-info"
                            element={<PagePersonalInfo />}
                        />
                        <Route path="/email" element={<PageEmail />} />
                        <Route
                            path="/residencia"
                            element={<PageResidencia />}
                        />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}
