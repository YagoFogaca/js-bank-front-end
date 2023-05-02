import {
    ImgLogo,
    VarianteHeaderStyle,
    VarianteSpanOption,
    VarianteUlMenu,
} from '../../components/header/style.header';
import { VarianteMain } from '../../styled-components/main/index.main';
import { FiLogOut } from 'react-icons/fi';
import { SectionPlatform } from './index.style';
import { useNavigate } from 'react-router-dom';

export function PagePlatform() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <VarianteMain>
            <VarianteHeaderStyle>
                <ImgLogo src="/logo-variante.svg" alt="" />

                <VarianteUlMenu>
                    <li>
                        <VarianteSpanOption>
                            Olá, {localStorage.getItem('full_name') ?? ''}
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
                            onClick={handleOnClick}
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
