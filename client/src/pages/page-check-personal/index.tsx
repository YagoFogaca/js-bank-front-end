import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { Text } from '../../styled-components/text-information/index.text';
import * as C from '../../styled-components/btns/index.btn';
import * as I from '../../styled-components/inputs/index.input';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import {
    SpanError,
    VarianteSpanError,
} from '../../styled-components/span/index.span';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';

export function PageCheckPersonal() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fullName = event.currentTarget.fullName.value;
        const birthDate = event.currentTarget.birthDate.value;
        const phoneNumber = event.currentTarget.phoneNumber.value;
        console.log(fullName);
        console.log(birthDate);
        console.log(phoneNumber);
        // setUser({ ...user, fullName, phoneNumber, birthDate });
        // navigate('/email');
    };
    return (
        <CardRegistration>
            <form>
                <Text>Confirme suas informações pessoais</Text>
                <VarianteSpanError visible={false}>
                    'validateDocumentNumber.message'
                </VarianteSpanError>

                <BoxInput>
                    <Input
                        // defaultValue={textPhoneNumber}
                        required
                        id="phoneNumber"
                    />
                    <Label>CPF</Label>
                    <SpanError visible={false}>Telefone inválido</SpanError>
                </BoxInput>

                <BoxInput>
                    <Input
                        // defaultValue={textFullName}
                        required
                        id="fullName"
                    />
                    <Label>Nome completo</Label>
                    <SpanError visible={false}>Nome inválido</SpanError>
                </BoxInput>

                <BoxInput>
                    <Input
                        // defaultValue={textBirthDate}
                        required
                        id="birthDate"
                        type="date"
                        placeholder=""
                    />
                    <Label>Data de nascimento</Label>
                    <SpanError visible={false}>
                        Você precisa ser maior que 18 anos
                    </SpanError>
                </BoxInput>

                <BoxInput>
                    <Input
                        // defaultValue={textPhoneNumber}
                        required
                        id="phoneNumber"
                    />
                    <Label>Telefone</Label>
                    <SpanError visible={false}>Telefone inválido</SpanError>
                </BoxInput>

                <Text>Confirme seu endereço</Text>
                <I.BoxInput>
                    <I.Input required id="zipCode" type="text" />
                    <Label>CEP</Label>
                    <SpanError visible={false}>
                        CEP invalido ou não existe
                    </SpanError>
                </I.BoxInput>

                <I.BoxInputs>
                    <I.BoxInput>
                        <I.VarianteInput required id="state" type="text" />
                        <Label>Estado</Label>
                    </I.BoxInput>

                    <I.BoxInput>
                        <I.VarianteInput required id="city" type="text" />
                        <Label>Cidade</Label>
                    </I.BoxInput>
                </I.BoxInputs>

                <I.BoxInput>
                    <I.Input required id="street" type="text" />
                    <Label>Rua</Label>
                </I.BoxInput>

                <I.BoxInputs>
                    <I.BoxInput>
                        <I.VarianteInput required id="number" type="text" />
                        <Label>Número</Label>
                    </I.BoxInput>

                    <I.BoxInput>
                        <I.VarianteInput2 id="complement" type="text" />
                        <Label>Complemento</Label>
                    </I.BoxInput>
                </I.BoxInputs>

                <C.BoxBtns>
                    <C.Btn>Seguir</C.Btn>
                </C.BoxBtns>
            </form>
        </CardRegistration>
        // <PersonalInformation
        //     handleSubmit={handleSubmit}
        //     textFullName={user.fullName}
        //     textBirthDate={user.birthDate}
        //     textPhoneNumber={user.phoneNumber}
        //     textBtn="Conferir"
        // />
    );
}
