import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { UserContext } from '../../contexts/user.context';
import { VarianteSpanError } from '../../styled-components/span/index.span';
import { ValidateInfos } from '../../utils/types/index.props';
import { Api } from '../../utils/api/api';

export function PageCpf() {
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [validateDocumentNumber, setValidateDocumentNumber] =
        useState<ValidateInfos>({
            message: '',
            valid: false,
        });
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
            setValidateDocumentNumber({
                message: 'CPF já cadastrado!',
                valid: true,
            });
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
            setValidateDocumentNumber({
                message: 'CPF inválido!',
                valid: true,
            });
        } else {
            setValidateDocumentNumber({
                message: '',
                valid: false,
            });
            setDisabledBtn(false);
        }
    };

    return (
        <>
            <CardRegistration>
                <form onSubmit={handleSubmit}>
                    <VarianteSpanError visible={validateDocumentNumber.valid}>
                        {validateDocumentNumber.message}
                    </VarianteSpanError>
                    <BoxInput>
                        <Input
                            required
                            name="documentNumber"
                            onChange={handleDocumentNumberChange}
                        />
                        <Label>CPF</Label>
                    </BoxInput>
                    <BoxBtns>
                        <Btn disabled={disabledBtn}>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
