import { GlobalStyle } from './global.style';
import { ContextProvider } from './contexts/user.context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageHome } from './pages/page-home';
import { RoutesCreateAccount } from './routes/create-account';
import { RoutesPlatform } from './routes/platform';

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route
                            path="*"
                            element={
                                <>
                                    <h1>Teste</h1>
                                </>
                            }
                        />
                        <Route path="/" element={<PageHome />} />
                        <Route
                            path="/create-account/*"
                            element={<RoutesCreateAccount />}
                        />

                        <Route
                            path="/platform/*"
                            element={<RoutesPlatform />}
                        />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}
