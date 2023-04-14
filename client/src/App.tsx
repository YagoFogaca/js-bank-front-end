import { GlobalStyle } from './global.style';
import { ContextProvider } from './contexts/user.context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';
import { PageInformacoes } from './pages/page-informacoes';
import { PageEmail } from './pages/page-email';
import { PageResidencia } from './pages/page-residencia';
import { PageWebCam } from './pages/page-webcam';

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
                            path="/residencia"
                            element={<PageResidencia />}
                        />
                        <Route path="/fotos" element={<PageWebCam />} />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}
