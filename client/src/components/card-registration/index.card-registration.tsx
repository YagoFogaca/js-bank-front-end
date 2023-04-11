import { PorpsCardRegistration } from '../../utils/types/index.props';
import * as C from './style.card-registration';

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
