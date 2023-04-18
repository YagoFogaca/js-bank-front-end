import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/api/api';
import { UserContext } from '../../contexts/user.context';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { VarianteSpanError } from '../../styled-components/span/index.span';
import * as C from '../../styled-components/btns/index.btn';
import { ValidateInfos } from '../../utils/types/index.props';

export function PageEmail() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [validateDocumentNumber, setValidateDocumentNumber] =
        useState<ValidateInfos>({
            message: '',
            valid: false,
        });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailAddress = event.currentTarget.emailAddress.value;
        try {
            await Api.sendEmailCode({ emailAddress });
            setUser({ ...user, emailAddress });
            navigate('/verify-email');
        } catch (error) {
            setValidateDocumentNumber({
                message: 'E-mail já registrado',
                valid: true,
            });
        }
    };

    const handleEmailCodeChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                event.currentTarget.value,
            )
        ) {
            setValidateDocumentNumber({
                message: 'E-mail invalido',
                valid: true,
            });
        } else if (validateDocumentNumber.valid) {
            console.log('Teste');
            setValidateDocumentNumber({
                message: '',
                valid: false,
            });
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
        </>
    );
}
