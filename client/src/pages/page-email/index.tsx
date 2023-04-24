import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/api/api';
import { UserContext } from '../../contexts/user.context';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Loading } from '../../components/loading/index.loading';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';
import { Label } from '../../styled-components/label/index.label';
import { Input } from '../../styled-components/inputs/index.input';
import * as C from '../../styled-components/btns/index.btn';

export function PageEmail() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [validateEmail, setValidateEmail] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailAddress = event.currentTarget.emailAddress.value;
        try {
            setLoading(true);
            await Api.sendEmailCode({ emailAddress });
            setUser({ ...user, emailAddress });
            setLoading(false);
            navigate('/verify-email');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setValidateEmail(true);
        }
    };

    const handleEmailCodeChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(event.currentTarget.value)) {
            setEmailCheck(true);
        } else if (emailCheck) {
            setEmailCheck(false);
        }
    };

    return (
        <>
            <CardRegistration>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {validateEmail ? (
                            <TE.TextErrorVariante>
                                O E-mail já está registrado!
                            </TE.TextErrorVariante>
                        ) : (
                            <TI.Text>Agora é a hora do seu E-mail</TI.Text>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label>E-mail</Label>
                                <Input
                                    placeholder="jsbank@jsbank.com"
                                    required
                                    id="emailAddress"
                                    type="email"
                                    className={emailCheck ? 'error' : ''}
                                    autoComplete="off"
                                    onChange={handleEmailCodeChange}
                                />
                                {emailCheck ? (
                                    <TE.TextError visible={emailCheck}>
                                        E-mail invalido!
                                    </TE.TextError>
                                ) : (
                                    <TI.TextInformation>
                                        Seu e-mail pessoal, aquele que você mais
                                        usa.
                                    </TI.TextInformation>
                                )}
                            </div>

                            <C.BoxBtns>
                                <C.Btn>Seguir</C.Btn>
                            </C.BoxBtns>
                        </form>
                    </>
                )}
            </CardRegistration>
        </>
    );
}
