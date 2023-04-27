import { Link } from 'react-router-dom';
import { HeaderStyle, ImgLogo, SpanOption, UlMenu } from './style.header';

export function Header() {
    return (
        <HeaderStyle>
            <Link to={'/'}>
                <ImgLogo src="/logo.svg" alt="" />
            </Link>
            <UlMenu>
                <li>
                    <Link to="/platform/">
                        <SpanOption>Login</SpanOption>
                    </Link>
                </li>
            </UlMenu>
        </HeaderStyle>
    );
}
