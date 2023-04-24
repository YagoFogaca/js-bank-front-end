import { GlobalStyle } from './global.style';
import { ContextProvider } from './contexts/user.context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageCpf } from './pages/page-cpf';
import { PagePersonalInformation } from './pages/page-personal-information';
import { PageEmail } from './pages/page-email';
import { PageVerifyEmail } from './pages/page-verify-email';
import { PageResidential } from './pages/page-residential-information';
import { PagePhoto } from './pages/page-photo';
import { RoutesCheckInformation } from './routes/index.routes.check-information';
import { CreateAccount } from './pages/page-create-account';

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
                            path="/residential-information"
                            element={<PageResidential />}
                        />
                        <Route path="/photo" element={<PagePhoto />} />
                        <Route
                            path="/check-information/*"
                            element={<RoutesCheckInformation />}
                        />
                        <Route
                            path="/create-account"
                            element={<CreateAccount />}
                        />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}
