import { Link } from 'react-router-dom';
import * as C from './style.section-home';

export function SectionHome() {
    return (
        <>
            <C.Section>
                <C.SectionInfos>
                    <C.H4>Cansado de filas?</C.H4>
                    <C.H5>
                        Conheça sua solução digital, faça parte da familia
                        <C.SpanLogo>
                            J<C.SpanLogoVariant>S</C.SpanLogoVariant>Bank
                        </C.SpanLogo>
                        .
                    </C.H5>
                </C.SectionInfos>
                <C.SectionCard>
                    <C.H6>
                        Peça sua conta e cartão de crédito do
                        <C.SpanLogo>
                            J<C.SpanLogoVariant>S</C.SpanLogoVariant>Bank
                        </C.SpanLogo>
                    </C.H6>
                    <Link to={'/create-account/'}>
                        <C.Btn>Começar</C.Btn>
                    </Link>
                </C.SectionCard>
            </C.Section>
        </>
    );
}
