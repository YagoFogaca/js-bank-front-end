import { Route, Routes } from 'react-router-dom';
import { PageCheckInformation } from '../../pages/page-check-information';
import { PageCheckPersonal } from '../../pages/page-check-personal';

export function RoutesCheckInformation() {
    return (
        <Routes>
            <Route path="/" element={<PageCheckInformation />} />
            <Route path="personal" element={<PageCheckPersonal />} />
        </Routes>
    );
}
