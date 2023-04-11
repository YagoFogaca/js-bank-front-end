import { CardRegistration } from './components/card-registration/index.card-registration';
import { GlobalStyle } from './global.style';
// import { BoxBtns, Btn } from './styled-components/btns/index.btn';
// import { BoxInput, Input } from './styled-components/inputs/index.input';
// import { Label } from './styled-components/label/index.label';

export function App() {
    return (
        <>
            <GlobalStyle />
            <CardRegistration></CardRegistration>
        </>
    );
}
