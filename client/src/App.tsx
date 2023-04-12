import { GlobalStyle } from './global.style';
import { ContextProvider } from './contexts/user.context';
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
<<<<<<< HEAD
                <Routes>
                    <Route path="/" element={<PageCpf />} />
                    <Route
                        path="/personal-info"
                        element={<PagePersonalInfo />}
                    />
                    <Route path="/email" element={<PageEmail />} />

                    <Route path="/recidemce" element={<PageResidence/>} />

                </Routes>
=======
                <ContextProvider>
                    <Routes>
                        <Route path="/" element={<PageCpf />} />
                        <Route
                            path="/personal-info"
                            element={<PagePersonalInfo />}
                        />
                        <Route path="/email" element={<PageEmail />} />
                    </Routes>
                </ContextProvider>
>>>>>>> 7449e07fb48d3bd351739b729d0a4459a16271ac
            </BrowserRouter>
        </>
    );
}
