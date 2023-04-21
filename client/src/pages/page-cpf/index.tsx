import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { Api } from '../../utils/api/api';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';
import { Label } from '../../styled-components/label/index.label';
import { Input } from '../../styled-components/inputs/index.input';
import * as B from '../../styled-components/btns/index.btn';

export function PageCpf() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [documentNumberCheck, setDocumentNumberCheck] = useState(false);
    const [validateDocumentNumber, setValidateDocumentNumber] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const documentNumber = event.currentTarget.documentNumber.value;

        try {
            await Api.findDocumentNumber(documentNumber);
            setUser({ ...user, documentNumber });
            navigate('/personal-information');
        } catch (error) {
            console.log(error);
            setValidateDocumentNumber(true);
        }
    };

    const handleDocumentNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const regex = /[^0-9]/;
        const newDocumentNumber = event.target.value;

        if (regex.test(newDocumentNumber) || newDocumentNumber.length !== 11) {
            setDocumentNumberCheck(true);
        } else if (documentNumberCheck || disabledBtn) {
            setDocumentNumberCheck(false);
            setDisabledBtn(false);
        }
    };

    return (
        <>
            <CardRegistration>
                {validateDocumentNumber ? (
                    <TE.TextErrorVariante>
                        CPF já cadastrado
                    </TE.TextErrorVariante>
                ) : (
                    <TI.Text>Informe seu CPF para a gente começar</TI.Text>
                )}
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label>CPF</Label>
                        <Input
                            className={documentNumberCheck ? 'error' : ''}
                            placeholder="000.000.000-00"
                            required
                            name="documentNumber"
                            onChange={handleDocumentNumberChange}
                        />
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
                        <B.Btn disabled={disabledBtn}>Seguir</B.Btn>
                    </B.BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
