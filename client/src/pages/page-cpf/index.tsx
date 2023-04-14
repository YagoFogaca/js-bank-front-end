import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { UserContext } from '../../contexts/user.context';
import { SpanError } from '../../styled-components/span/index.span';
import { Api } from '../../utils/types/api/api';

export function PageCpf() {
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [validateDocumentNumber, setValidateDocumentNumber] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const documentNumber = event.currentTarget.documentNumber.value;

        try {
            await Api.findDocumentNumber(documentNumber);

            setUser({ ...user, documentNumber });
            navigate('/informacoes-pessoais');
        } catch (error) {
            // Mensagem de CPF já existente no banco de dados
        }
    };

    const handleDocumentNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newDocumentNumber = event.target.value;

        if (
            /[^0-9]/.test(newDocumentNumber) ||
            newDocumentNumber.length !== 11
        ) {
            setValidateDocumentNumber(true);
        } else {
            setValidateDocumentNumber(false);
            setDisabledBtn(false);
        }
    };

    return (
        <>
            <CardRegistration>
                <h2>Abra sua conta</h2>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <BoxInput>
                        <Input
                            required
                            name="documentNumber"
                            onChange={handleDocumentNumberChange}
                        />
                        <Label>CPF</Label>
                        <SpanError visible={validateDocumentNumber}>
                            CPF inválido!
                        </SpanError>
                    </BoxInput>
                    <BoxBtns>
                        <Btn disabled={disabledBtn}>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
