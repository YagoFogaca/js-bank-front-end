import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import * as T from '../../styled-components/text-information/index.text';
import { Label } from '../../styled-components/label/index.label';
import { Input } from '../../styled-components/inputs/index.input';
import { TextError } from '../../styled-components/span/index.span';
import { Ol } from '../../styled-components/list/index.list';
import * as C from '../../styled-components/btns/index.btn';

export function PagePassword() {
    const navigate = useNavigate();
    const [accessPasswordCheck, setAccessPasswordCheck] = useState(false);
    const [accessPasswordCompare, setAccessPasswordCompare] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        if (!regex.test(event.currentTarget.value)) {
            setAccessPasswordCheck(true);
        } else {
            setPassword(event.currentTarget.value);
            setAccessPasswordCheck(false);
        }
    };

    const handlePasswordChangeCheck = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (event.currentTarget.value !== password) {
            setAccessPasswordCompare(true);
        } else {
            setAccessPasswordCompare(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        navigate('/create-account');
    };

    return (
        <CardRegistration>
            <T.Text>Agora crie uma senha para acessar o aplicativo</T.Text>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label>Senha</Label>
                    <Input
                        required
                        placeholder="Escolha uma senha"
                        type="password"
                        id="accessPassword"
                        autoComplete="off"
                        className={accessPasswordCheck ? 'error' : ''}
                        onChange={handlePasswordChange}
                    />

                    {accessPasswordCheck ? (
                        <TextError visible={accessPasswordCheck}>
                            Sua senha é invalida
                        </TextError>
                    ) : (
                        <></>
                    )}
                </div>

                <div>
                    <Label>Confirme sua senha</Label>
                    <Input
                        required
                        placeholder="*******"
                        type="password"
                        id="confirmAccessPassword"
                        autoComplete="off"
                        className={accessPasswordCompare ? 'error' : ''}
                        onChange={handlePasswordChangeCheck}
                    />
                    {accessPasswordCompare ? (
                        <TextError visible={accessPasswordCompare}>
                            As senhas não correspondem
                        </TextError>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    <T.VarianteTextInformation>
                        Sua senha precisa ter:
                    </T.VarianteTextInformation>
                    <Ol>
                        <li>8 ou mais digitos</li>
                        <li>Uma letra maiuscula</li>
                        <li>Uma minuscula</li>
                        <li>Um número</li>
                        <li>Um Caracter especial</li>
                    </Ol>
                </div>
                <C.BoxBtns>
                    <C.Btn
                        disabled={
                            !(!accessPasswordCheck && !accessPasswordCompare)
                        }
                        className={
                            !(!accessPasswordCheck && !accessPasswordCompare)
                                ? 'error'
                                : ''
                        }
                    >
                        Seguir
                    </C.Btn>
                </C.BoxBtns>
            </form>
        </CardRegistration>
    );
}
