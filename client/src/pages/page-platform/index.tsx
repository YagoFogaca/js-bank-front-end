import {
    ImgLogo,
    VarianteHeaderStyle,
    VarianteSpanOption,
    VarianteUlMenu,
} from '../../components/header/style.header';
import { VarianteMain } from '../../styled-components/main/index.main';
import { FiLogOut } from 'react-icons/fi';
import { SectionPlatform } from './index.style';

export function PagePlatform() {
    return (
        <VarianteMain>
            <VarianteHeaderStyle>
                <ImgLogo src="/logo-variante.svg" alt="" />

                <VarianteUlMenu>
                    <li>
                        <VarianteSpanOption>
                            Olá, {localStorage.getItem('full_name') ?? 'Otario'}
                        </VarianteSpanOption>
                    </li>
                    <li>
                        <button
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                            }}
                        >
                            <FiLogOut size={31} />
                        </button>
                    </li>
                </VarianteUlMenu>
            </VarianteHeaderStyle>
            <SectionPlatform>Bem vindo</SectionPlatform>
        </VarianteMain>
    );
}
