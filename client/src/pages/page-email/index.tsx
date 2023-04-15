import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import * as C from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { Api } from '../../utils/api/api';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

export function PageEmail() {
    const [codeSent, setCodeSent] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailAddress = event.currentTarget.emailAddress.value;

        try {
            setUser({ ...user, emailAddress });
            await Api.sendEmailCode(emailAddress);
            setCodeSent(true);
        } catch (error) {
            // Mensagem de e-mail já existente no banco de dados
        }
    };

    const verifyEmailCode = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailAddress = user.emailAddress;

        const emailCode = event.currentTarget.emailCode.value;

        try {
            await Api.verifyEmailCode({ emailAddress, emailCode });
            navigate('/informacoes-residenciais');
        } catch (error) {
            // Mensagem de código de validação inválido
        }
    };

    const handleEmailCodeChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                event.currentTarget.value,
            )
        ) {
            console.log('É valido: ', event.currentTarget.value);
        } else {
            console.log('Invalido: ', event.currentTarget.value);
        }
    };

    return (
        <>
            {!codeSent ? (
                <CardRegistration>
                    <form onSubmit={handleSubmit}>
                        <BoxInput>
                            <Input
                                required
                                id="emailAddress"
                                type="email"
                                onChange={handleEmailCodeChange}
                            />
                            <Label>E-mail</Label>
                        </BoxInput>

                        <C.BoxBtns>
                            <C.Btn>Seguir</C.Btn>
                        </C.BoxBtns>
                    </form>
                </CardRegistration>
            ) : (
                <CardRegistration>
                    <form onSubmit={verifyEmailCode}>
                        <p>
                            Enviamos um código de validação para o e-mail
                            informado. Ele tem duração de 15 minutos.
                        </p>
                        <br></br>
                        <BoxInput>
                            <Input required id="emailCode" type="text" />
                            <Label>Insira o código de validação</Label>
                        </BoxInput>

                        <C.VarianteBoxBtns>
                            <C.VarianteButton
                                type="button"
                                color="true"
                                onClick={() => {
                                    setCodeSent(false);
                                }}
                            >
                                Reenviar código
                            </C.VarianteButton>
                            <C.VarianteButton>Seguir</C.VarianteButton>
                        </C.VarianteBoxBtns>
                    </form>
                </CardRegistration>
            )}
        </>
    );
}
