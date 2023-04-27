import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { Api } from '../../utils/api/api';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Loading } from '../../components/loading/index.loading';
import { Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import * as C from '../../styled-components/btns/index.btn';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';

export function PageVerifyEmail() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [emailCodeCheck, setEmailCodeCheck] = useState(false);
    const [validateEmailCode, setValidateEmailCode] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailAddress = user.emailAddress;
        const emailCode = event.currentTarget.emailCode.value;
        try {
            setLoading(true);
            await Api.verifyEmailCode({ emailAddress, emailCode });
            setLoading(false);
            navigate('/create-account/residential-information');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setValidateEmailCode(true);
        }
    };

    const handleEmailCodeChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const regex = /[^0-9]/;
        const emailCode = event.target.value;

        if (regex.test(emailCode) || emailCode.length !== 4) {
            setEmailCodeCheck(true);
        } else if (emailCodeCheck) {
            setEmailCodeCheck(false);
        }
    };

    const handleOnClick = () => {
        navigate('/email');
    };

    return (
        <CardRegistration>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        {validateEmailCode ? (
                            <TE.TextErrorVariante>
                                Codigo invalido!
                            </TE.TextErrorVariante>
                        ) : (
                            <TI.Text>
                                Enviamos um código para o e-mail informado. Ele
                                serve para validar o e-mail e tem duração de 15
                                minutos.
                            </TI.Text>
                        )}

                        <div>
                            <Label>Código</Label>

                            <Input
                                className={emailCodeCheck ? 'error' : ''}
                                required
                                id="emailCode"
                                type="text"
                                autoComplete="off"
                                placeholder="0000"
                                onChange={handleEmailCodeChange}
                            />

                            {emailCodeCheck ? (
                                <TE.TextError visible={emailCodeCheck}>
                                    Seu codigo é invalido!
                                </TE.TextError>
                            ) : (
                                <TI.TextInformation>
                                    Não se esqueça de olhar na caixa de span.
                                </TI.TextInformation>
                            )}
                        </div>

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
                </>
            )}
        </CardRegistration>
    );
}
