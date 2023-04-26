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
import { PagePassword } from './pages/page-password';
import { PageLoginCpf } from './pages/page-login-cpf';
import { PageLoginPassword } from './pages/page-login-password';
import { PageLoginPhoto } from './pages/page-login-photo';

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
                            path="/password"
                            element={<PagePassword />}
                        ></Route>
                        <Route
                            path="/create-account"
                            element={<CreateAccount />}
                        />
                        <Route
                            path="/login-cpf"
                            element={<PageLoginCpf />}
                        />
                        <Route
                            path="/login-password"
                            element={<PageLoginPassword />}
                        />
                        <Route
                            path="/login-photo"
                            element={<PageLoginPhoto />}
                        />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}
