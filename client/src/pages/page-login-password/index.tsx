import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import * as T from '../../styled-components/text-information/index.text';
import { Label } from '../../styled-components/label/index.label';
import { Input } from '../../styled-components/inputs/index.input';
import { TextError } from '../../styled-components/span/index.span';
import * as C from '../../styled-components/btns/index.btn';
import { Api } from '../../utils/api/api';

export function PageLoginPassword() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [accessPasswordIncorrect, setAccessPasswordIncorrect] = useState(false);
    const [accessPasswordCheck, setAccessPasswordCheck] = useState(false);
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

        setAccessPasswordIncorrect(false);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        const data = {
            documentNumber: localStorage.getItem('documentNumber'),
            accessPassword: password,
        }

        try {
            setLoading(true);
            const { access_token } = await Api.signIn(data);
            localStorage.setItem('access_token', access_token);
            setLoading(false);
            navigate('/login-photo');
        } catch (error) {
            setAccessPasswordIncorrect(true);
            setLoading(false);
        }
    };

    return (
        <CardRegistration>
            <T.Text>Agora informe sua senha de acesso ao aplicativo</T.Text>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label>Senha</Label>
                    <Input
                        required
                        placeholder="Informe sua senha"
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
                    {accessPasswordIncorrect ? (
                        <TextError visible={accessPasswordIncorrect}>
                            Usuário não autorizado!
                        </TextError>
                    ) : (
                        <></>
                    )}
                </div>
                <C.BoxBtns>
                    <C.Btn
                        disabled={
                            !(!accessPasswordCheck)
                        }
                        className={
                            !(!accessPasswordCheck)
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
