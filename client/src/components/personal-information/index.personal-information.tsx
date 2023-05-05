import { useState } from 'react';
import { PropsInformation } from '../../utils/types/index.props';
import {
    Input,
    StyledNumberFormat,
} from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';

export function PersonalInformation({
    textFullName,
    textBirthDate,
    disabledBtn,
    setDisabledBtn,
}: PropsInformation) {
    const [errorFullName, setErrorFullName] = useState(false);
    const [errorBirthDate, setBirthDate] = useState(false);
    const [errorPhoneNumber, setPhoneNumber] = useState(false);

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
        const regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
        const phoneNumber = event.currentTarget.value;
        if (!regex.test(phoneNumber)) {
            setPhoneNumber(true);
            setDisabledBtn({ ...disabledBtn, phoneNumber: true });
        } else {
            setPhoneNumber(false);
            setDisabledBtn({ ...disabledBtn, phoneNumber: false });
        }
    };

    return (
        <>
            <div>
                <Label>Nome completo*</Label>
                <Input
                    placeholder="José Fulano de Tal"
                    defaultValue={textFullName}
                    required
                    id="fullName"
                    className={errorFullName ? 'error' : ''}
                    autoComplete="off"
                    onChange={handleFullNameChange}
                />

                {errorFullName ? (
                    <TE.TextError visible={errorFullName}>
                        Seu nome é invalido!
                    </TE.TextError>
                ) : (
                    <TI.TextInformation>Seu nome completo.</TI.TextInformation>
                )}
            </div>

            <div>
                <Label>Data de nascimento</Label>
                <Input
                    placeholder="01/01/2000"
                    defaultValue={textBirthDate}
                    required
                    id="birthDate"
                    type="date"
                    className={errorBirthDate ? 'error' : ''}
                    autoComplete="off"
                    onChange={handleBirthDateChange}
                />
                {errorBirthDate ? (
                    <TE.TextError visible={errorBirthDate}>
                        Você precisa ser maior que 18 anos!
                    </TE.TextError>
                ) : (
                    <TI.TextInformation>
                        Sua data de nascimento, sem as barras.
                    </TI.TextInformation>
                )}
            </div>

            <div>
                <Label>Telefone</Label>

                <StyledNumberFormat
                    mask="(99) 99999-9999"
                    onChange={handlePhoneNumberChange}
                    placeholder="(99) 99999-9999"
                    required
                    type="text"
                    className={errorPhoneNumber ? 'error' : ''}
                    name="phoneNumber"
                />

                {errorPhoneNumber ? (
                    <TE.TextError visible={errorPhoneNumber}>
                        Seu telefone é invalido!
                    </TE.TextError>
                ) : (
                    <TI.TextInformation>
                        Seu telefone pessoal, sem traço e espaços.
                    </TI.TextInformation>
                )}
            </div>
        </>
    );
}
