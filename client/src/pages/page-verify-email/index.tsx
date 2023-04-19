import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { Api } from '../../utils/api/api';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Text } from '../../styled-components/text-information/index.text';
import { VarianteSpanError } from '../../styled-components/span/index.span';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import * as C from '../../styled-components/btns/index.btn';

export function PageVerifyEmail() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [msg, setMsg] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailAddress = user.emailAddress;
        const emailCode = event.currentTarget.emailCode.value;
        try {
            await Api.verifyEmailCode({ emailAddress, emailCode });
            navigate('/residential-information');
        } catch (error) {
            setMsg(true);
        }
    };

    const handleOnClick = () => {
        navigate('/email');
    };

    return (
        <CardRegistration>
            <form onSubmit={handleSubmit}>
                {msg ? (
                    <VarianteSpanError visible={msg}>
                        Código invalido
                    </VarianteSpanError>
                ) : (
                    <Text>
                        Enviamos um código de validação para o e-mail informado.
                        Ele tem duração de 15 minutos.
                    </Text>
                )}

                <BoxInput>
                    <Input required id="emailCode" type="text" />
                    <Label>Insira o código</Label>
                </BoxInput>

                <C.VarianteBoxBtns>
                    <C.VarianteButton
                        type="button"
                        color="true"
                        onClick={handleOnClick}
                    >
                        Reenviar código
                    </C.VarianteButton>
                    <C.VarianteButton>Seguir</C.VarianteButton>
                </C.VarianteBoxBtns>
            </form>
        </CardRegistration>
    );
}
