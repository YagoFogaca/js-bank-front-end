import { GlobalStyle } from './global.style';
import { ContextProvider } from './contexts/user.context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';
import { PagePersonalInformation } from './pages/page-informacoes';
import { PageEmail } from './pages/page-email';
import { PageVerifyEmail } from './pages/page-verify-email';
import { PageResidencia } from './pages/page-residencia';
import { PageFoto } from './pages/page-foto';
import { RoutesCheckInformation } from './routes/index.routes.check-information';

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route path="/" element={<PageCpf />} />
                        <Route
                            path="/personal-information"
                            element={<PagePersonalInformation />}
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
                        <Route
                            path="/check-information/*"
                            element={<RoutesCheckInformation />}
                        />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}
