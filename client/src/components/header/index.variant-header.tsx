import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import {
    ImgLogo,
    VarianteHeaderStyle,
    VarianteSpanOption,
    VarianteUlMenu,
} from './style.header';

export function VariantHeader() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        localStorage.removeItem('documentNumber');
        localStorage.removeItem('access_token');
        localStorage.removeItem('full_name');
        navigate('/');
    };

    return (
        <>
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
        </>
    );
}
