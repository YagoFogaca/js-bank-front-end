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

    const address = user.homeAddress.split(',');

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

        navigate('/create-account');
    };

    return (
        <CardRegistration>
            <form onSubmit={handleSubmit}>
                <Text>Confirme suas informações pessoais</Text>

                <BoxInput>
                    <Label>CPF</Label>
                    <Input
                        defaultValue={user.documentNumber}
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
                <AddressInformation
                    city={address[0]}
                    state={address[1]}
                    street={address[2]}
                    number={address[3]}
                    complement={address[4] ?? ''}
                    zipCode={user.zipCode}
                />

                <C.BoxBtns>
                    <C.Btn>Seguir</C.Btn>
                </C.BoxBtns>
            </form>
        </CardRegistration>
    );
}
