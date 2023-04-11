import { ReactNode } from 'react';
import * as C from './style.card-registration';

type PorpsCardRegistration = {
    children: ReactNode;
};

export function CardRegistration({ children }: PorpsCardRegistration) {
    return (
        <C.SectionRegistration>
            <C.DivRegistration>
                <div>
                    <C.ImgLogo src="/logo.svg" alt="" />
                </div>
                <C.DivForm>{children}</C.DivForm>
            </C.DivRegistration>
        </C.SectionRegistration>
    );
}
