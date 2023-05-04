import { VarianteMain } from '../../styled-components/main/index.main';
import { VariantHeader } from '../../components/header/index.variant-header';
import * as C from './index.style';
import * as Hi from 'react-icons/hi';

export function PagePlatform() {
    return (
        <VarianteMain>
            <VariantHeader />

            <C.SectionPlatform>
                <C.CardPlatform>
                    <C.DivSection>
                        <Hi.HiOutlineCash size={31} />
                    </C.DivSection>

                    <C.DivSection>
                        <C.H4Section>Saldo</C.H4Section>
                        <C.PSection>R${'0,00'}</C.PSection>
                    </C.DivSection>
                </C.CardPlatform>

                <C.VariantCardPlatform>
                    <C.BtnSection>
                        <Hi.HiOutlineLogin
                            size={31}
                            style={{ transform: 'rotate(90deg)' }}
                        />
                        <C.PSection>Deposito</C.PSection>
                    </C.BtnSection>

                    <C.BtnSection>
                        <Hi.HiOutlineLogout
                            size={31}
                            style={{ transform: 'rotate(90deg)' }}
                        />
                        <C.PSection>Pagar</C.PSection>
                    </C.BtnSection>
                </C.VariantCardPlatform>

                <C.CardPlatform>
                    <C.DivSection>
                        <Hi.HiOutlineCreditCard size={31} />
                    </C.DivSection>

                    <C.DivSection>
                        <C.H4Section>Cartão de credito</C.H4Section>
                        <C.PSection>Indisponivel</C.PSection>
                    </C.DivSection>
                </C.CardPlatform>

                <C.CardPlatform>
                    <C.DivSection>
                        <Hi.HiOutlineTrendingUp size={31} />
                    </C.DivSection>

                    <C.DivSection>
                        <C.H4Section>Investimento</C.H4Section>
                        <C.PSection>Em breve</C.PSection>
                    </C.DivSection>
                </C.CardPlatform>
            </C.SectionPlatform>
        </VarianteMain>
    );
}
