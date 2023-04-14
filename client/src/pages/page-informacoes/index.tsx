import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { SpanError } from '../../styled-components/span/index.span';

export function PageInformacoes() {
    const { user, setUser } = useContext(UserContext);
    const [disabledBtn, setDisabledBtn] = useState({
        fullName: true,
        birthDate: true,
        phoneNumber: true,
    });
    const [errorFullName, setErrorFullName] = useState(false);
    const [errorBirthDate, setBirthDate] = useState(false);
    const [errorPhoneNumber, setPhoneNumber] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fullName = event.currentTarget.fullName.value;
        const birthDate = event.currentTarget.birthDate.value;
        const phoneNumber = event.currentTarget.phoneNumber.value;
        setUser({ ...user, fullName, phoneNumber, birthDate });
        navigate('/email');
    };

    const handleFullNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const fullName = event.currentTarget.value;
        if (!/^[\p{L}\s]+$/u.test(fullName) || fullName.length < 3) {
            setErrorFullName(true);
            setDisabledBtn({ ...disabledBtn, fullName: true });
        } else {
            setErrorFullName(false);
            setDisabledBtn({ ...disabledBtn, fullName: false });
        }
    };

    const handleBirthDateChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const userDate = event.currentTarget.value;
        const dateNow = new Date();
        dateNow.setFullYear(dateNow.getFullYear() - 18);
        const birthDate = new Date(userDate);
        if (birthDate > dateNow) {
            setBirthDate(true);
            setDisabledBtn({ ...disabledBtn, birthDate: true });
        } else {
            setBirthDate(false);
            setDisabledBtn({ ...disabledBtn, birthDate: false });
        }
    };

    const handlePhoneNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const phoneNumber = event.currentTarget.value;
        if (/[^0-9]/.test(phoneNumber) || phoneNumber.length < 11) {
            setPhoneNumber(true);
            setDisabledBtn({ ...disabledBtn, phoneNumber: true });
        } else {
            setPhoneNumber(false);
            setDisabledBtn({ ...disabledBtn, phoneNumber: false });
        }
    };

    return (
        <>
            <CardRegistration>
                <form onSubmit={handleSubmit}>
                    <BoxInput>
                        <Input
                            required
                            id="fullName"
                            onChange={handleFullNameChange}
                        />
                        <Label>Nome completo</Label>
                        <SpanError visible={errorFullName}>
                            Nome inválido
                        </SpanError>
                    </BoxInput>

                    <BoxInput>
                        <Input
                            required
                            id="birthDate"
                            type="date"
                            placeholder=""
                            onChange={handleBirthDateChange}
                        />
                        <Label>Data de nascimento</Label>
                        <SpanError visible={errorBirthDate}>
                            Você precisa ser maior que 18 anos
                        </SpanError>
                    </BoxInput>

                    <BoxInput>
                        <Input
                            required
                            id="phoneNumber"
                            onChange={handlePhoneNumberChange}
                        />
                        <Label>Telefone</Label>
                        <SpanError visible={errorPhoneNumber}>
                            Telefone inválido
                        </SpanError>
                    </BoxInput>

                    <BoxBtns>
                        <Btn
                            disabled={
                                !(
                                    !disabledBtn.fullName &&
                                    !disabledBtn.birthDate &&
                                    !disabledBtn.phoneNumber
                                )
                            }
                        >
                            Seguir
                        </Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
