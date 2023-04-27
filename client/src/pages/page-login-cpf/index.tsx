import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/api/api';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Loading } from '../../components/loading/index.loading';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';
import { Label } from '../../styled-components/label/index.label';
import { Input } from '../../styled-components/inputs/index.input';
import * as B from '../../styled-components/btns/index.btn';

export function PageLoginCpf() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [documentNumberCheck, setDocumentNumberCheck] = useState(false);
    const [validateDocumentNumber, setValidateDocumentNumber] = useState(true);
    const [accessPasswordCheck, setAccessPasswordCheck] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            documentNumber: event.currentTarget.documentNumber.value,
            accessPassword: event.currentTarget.accessPassword.value,
        };

        try {
            setLoading(true);
            const { access_token } = await Api.signIn(data);
            localStorage.setItem('documentNumber', data.documentNumber);
            localStorage.setItem('access_token', access_token);
            navigate('/platform/login-photo');
        } catch (error) {
            setLoading(false);
            setValidateDocumentNumber(false);
        }
    };

    const handleDocumentNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const regex = /[^0-9]/;
        const newDocumentNumber = event.target.value;

        if (regex.test(newDocumentNumber) || newDocumentNumber.length !== 11) {
            setDocumentNumberCheck(true);
            setDisabledBtn(true);
        } else if (documentNumberCheck || disabledBtn) {
            setDocumentNumberCheck(false);
            setDisabledBtn(false);
        }
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        if (!regex.test(event.currentTarget.value)) {
            setAccessPasswordCheck(true);
        } else {
            setAccessPasswordCheck(false);
        }
    };

    return (
        <>
            <CardRegistration>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {!validateDocumentNumber ? (
                            <TE.TextErrorVariante>
                                CPF ou senha inválidos.
                            </TE.TextErrorVariante>
                        ) : (
                            <TI.Text>
                                Informe seu CPF para a acessar a sua conta!
                            </TI.Text>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label>CPF</Label>
                                <Input
                                    className={
                                        documentNumberCheck ? 'error' : ''
                                    }
                                    placeholder="000.000.000-00"
                                    required
                                    name="documentNumber"
                                    onChange={handleDocumentNumberChange}
                                />
                                {documentNumberCheck ? (
                                    <TE.TextError visible={documentNumberCheck}>
                                        Seu CPF é invalido
                                    </TE.TextError>
                                ) : (
                                    <TI.TextInformation>
                                        Somente números, sem ponto e traço.
                                    </TI.TextInformation>
                                )}
                            </div>

                            <div>
                                <Label>Senha</Label>
                                <Input
                                    required
                                    placeholder="Informe sua senha"
                                    type="password"
                                    id="accessPassword"
                                    autoComplete="off"
                                    className={
                                        accessPasswordCheck ? 'error' : ''
                                    }
                                    onChange={handlePasswordChange}
                                />

                                {accessPasswordCheck ? (
                                    <TE.TextError visible={accessPasswordCheck}>
                                        Sua senha é invalida
                                    </TE.TextError>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <B.BoxBtns>
                                <B.Btn
                                    disabled={disabledBtn}
                                    className={disabledBtn ? 'error' : ''}
                                >
                                    Seguir
                                </B.Btn>
                            </B.BoxBtns>
                        </form>
                    </>
                )}
            </CardRegistration>
        </>
    );
}
