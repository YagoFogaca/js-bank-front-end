import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { Api } from '../../utils/api/api';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Loading } from '../../components/loading/index.loading';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';
import { Label } from '../../styled-components/label/index.label';
import { Input } from '../../styled-components/inputs/index.input';
import * as B from '../../styled-components/btns/index.btn';
import InputMask from 'react-input-mask';

export function PageCpf() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [documentNumberCheck, setDocumentNumberCheck] = useState(false);
    const [validateDocumentNumber, setValidateDocumentNumber] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const documentNumber = event.currentTarget.documentNumber.value;

        try {
            setLoading(true);
            await Api.findDocumentNumber(documentNumber);
            setUser({ ...user, documentNumber });
            setLoading(false);
            navigate('personal-information');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setValidateDocumentNumber(true);
        }
    };

    const handleDocumentNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
        const newDocumentNumber = event.target.value;

        if (!regex.test(newDocumentNumber)) {
            setDocumentNumberCheck(true);
            setDisabledBtn(true);
        } else if (documentNumberCheck || disabledBtn) {
            setDocumentNumberCheck(false);
            setDisabledBtn(false);
        }
    };

    return (
        <>
            <CardRegistration>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {validateDocumentNumber ? (
                            <TE.TextErrorVariante>
                                CPF inválido!
                            </TE.TextErrorVariante>
                        ) : (
                            <TI.Text>
                                Informe seu CPF para a gente começar
                            </TI.Text>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label>CPF</Label>
                                <InputMask mask="999.999.999-99" onChange={handleDocumentNumberChange}>
                                    {(inputProps) => <Input
                                        className={
                                            documentNumberCheck ? 'error' : ''
                                        }
                                        required
                                        name="documentNumber"
                                    />}
                                </InputMask>         
                            </div>

                            {documentNumberCheck ? (
                                <TE.TextError visible={documentNumberCheck}>
                                    Seu CPF é invalido
                                </TE.TextError>
                            ) : (
                                <TI.TextInformation>
                                    Somente números, sem ponto e traço.
                                </TI.TextInformation>
                            )}
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
