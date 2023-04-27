import { Route, Routes } from 'react-router-dom';
import { PageLoginCpf } from '../../pages/page-login-cpf';
import { PageLoginPassword } from '../../pages/page-login-password';
import { PageLoginPhoto } from '../../pages/page-login-photo';

export function RoutesPlatform() {
    return (
        <Routes>
            <Route path="/" element={<PageLoginCpf />} />
            <Route path="/login-password" element={<PageLoginPassword />} />
            <Route path="/login-photo" element={<PageLoginPhoto />} />
        </Routes>
    );
}
