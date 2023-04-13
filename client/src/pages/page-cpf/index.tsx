import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { UserContext } from '../../contexts/user.context';
import { SpanError } from '../../styled-components/span/index.span';

export function PageCpf() {
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [validateCpf, setValidateCpf] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setUser({ ...user, documentNumber: event.currentTarget.cpf.value });
        navigate('/informacoes');
    };

    const handleDocumentNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newDocumentNumber = event.target.value;

        if (
            /[^0-9]/.test(newDocumentNumber) ||
            newDocumentNumber.length !== 11
        ) {
            setValidateCpf(true);
        } else {
            setValidateCpf(false);
            setDisabledBtn(false);
        }
    };

    return (
        <>
            <CardRegistration>
                <form onSubmit={handleSubmit}>
                    <BoxInput>
                        <Input
                            required
                            id="cpf"
                            onChange={handleDocumentNumberChange}
                        />
                        <Label>CPF</Label>
                        <SpanError visible={validateCpf}>
                            O CPF é invalido
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
