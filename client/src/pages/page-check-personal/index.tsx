import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Text } from '../../styled-components/text-information/index.text';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { PersonalInformation } from '../../components/personal-information/index.personal-information';
import { AddressInformation } from '../../components/address-information/index.address-information';
import * as C from '../../styled-components/btns/index.btn';

export function PageCheckPersonal() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [disabledBtn, setDisabledBtn] = useState({
        fullName: true,
        birthDate: true,
        phoneNumber: true,
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log({
            documentNumber: event.currentTarget.documentNumber.value,
            fullName: event.currentTarget.fullName.value,
            birthDate: event.currentTarget.birthDate.value,
            phoneNumber: event.currentTarget.phoneNumber.value,
            street: event.currentTarget.street.value,
            number: event.currentTarget.number.value,
            complement: event.currentTarget.complement.value,
            city: event.currentTarget.city.value,
            state: event.currentTarget.state.value,
            zipCode: event.currentTarget.zipCode.value,
        });
        // homeAddress: `${event.currentTarget.city.value}, ${
        //     event.currentTarget.state.value
        // }, ${event.currentTarget.street.value}, ${
        //     event.currentTarget.number.value
        // }${
        //     event.currentTarget.complement.value
        //         ? ', ' + event.currentTarget.complement.value
        //         : ''
        // }`,
    };

    return (
        <CardRegistration>
            <form onSubmit={handleSubmit}>
                <Text>Confirme suas informações pessoais</Text>

                <BoxInput>
                    <Label>CPF</Label>
                    <Input
                        // defaultValue={textPhoneNumber}
                        placeholder="000.000.000-00"
                        required
                        id="documentNumber"
                        autoComplete="off"
                    />
                </BoxInput>

                <PersonalInformation
                    textBirthDate={user.birthDate}
                    textFullName={user.fullName}
                    textPhoneNumber={user.phoneNumber}
                    setDisabledBtn={setDisabledBtn}
                    disabledBtn={disabledBtn}
                />

                <Text>Confirme seu endereço</Text>
                <AddressInformation />

                <C.BoxBtns>
                    <C.Btn
                        disabled={
                            !(
                                !disabledBtn.fullName &&
                                !disabledBtn.birthDate &&
                                !disabledBtn.phoneNumber
                            )
                        }
                    >
                        Seguir
                    </C.Btn>
                </C.BoxBtns>
            </form>
        </CardRegistration>
    );
}
