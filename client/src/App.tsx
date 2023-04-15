import { GlobalStyle } from './global.style';
import { ContextProvider } from './contexts/user.context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';
import { PageInformacoes } from './pages/page-informacoes';
import { PageEmail } from './pages/page-email';
import { PageVerifyEmail } from './pages/page-verify-email';
import { PageResidencia } from './pages/page-residencia';
import { PageFoto } from './pages/page-foto';

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route path="/" element={<PageCpf />} />
                        <Route
                            path="/informacoes-pessoais"
                            element={<PageInformacoes />}
                        />
                        <Route path="/email" element={<PageEmail />} />
                        <Route
                            path="/verify-email"
                            element={<PageVerifyEmail />}
                        />
                        <Route
                            path="/informacoes-residenciais"
                            element={<PageResidencia />}
                        />
                        <Route path="/foto" element={<PageFoto />} />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}
