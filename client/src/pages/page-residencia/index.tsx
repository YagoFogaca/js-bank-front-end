import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ViaCep } from '../../utils/via-cep';
import { ResViaCep } from '../../utils/types/index.props';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Text } from '../../styled-components/text-information/index.text';
import * as C from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { SpanError } from '../../styled-components/span/index.span';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';

export function PageResidential() {
    const [addressData, setAddressData] = useState<ResViaCep>();
    const [errorCep, setErrorCep] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleZipCodeChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const zipCode = event.target.value;

        if (zipCode.length == 8) {
            try {
                const addressData: ResViaCep = await ViaCep(zipCode);
                setAddressData(addressData);
            } catch (error) {
                console.log(error);
                setErrorCep(true);
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const street = event.currentTarget.street.value;
        const number = event.currentTarget.number.value;
        const complement = event.currentTarget.complement.value;
        const city = event.currentTarget.city.value;
        const state = event.currentTarget.state.value;
        const zipCode = event.currentTarget.zipCode.value;

        const homeAddress = `${city}, ${state}, ${street}, ${number}${
            complement ? ', ' + complement : ''
        }`;
        setUser({ ...user, homeAddress, zipCode });
        navigate('/photo');
    };

    return (
        <>
            <CardRegistration>
                <Text>Insira suas informações residenciais</Text>
                <form onSubmit={handleSubmit}>
                    <C.BoxInput>
                        <C.Input
                            required
                            id="zipCode"
                            type="text"
                            onChange={handleZipCodeChange}
                        />
                        <Label>CEP</Label>
                        <SpanError visible={errorCep}>
                            CEP invalido ou não existe
                        </SpanError>
                    </C.BoxInput>

                    <C.BoxInputs>
                        <C.BoxInput>
                            <C.VarianteInput
                                required
                                id="state"
                                type="text"
                                defaultValue={addressData?.uf}
                            />
                            <Label>Estado</Label>
                        </C.BoxInput>

                        <C.BoxInput>
                            <C.VarianteInput
                                required
                                id="city"
                                type="text"
                                defaultValue={addressData?.localidade}
                            />
                            <Label>Cidade</Label>
                        </C.BoxInput>
                    </C.BoxInputs>

                    <C.BoxInput>
                        <C.Input
                            required
                            id="street"
                            type="text"
                            defaultValue={addressData?.logradouro}
                        />
                        <Label>Rua</Label>
                    </C.BoxInput>

                    <C.BoxInputs>
                        <C.BoxInput>
                            <C.VarianteInput required id="number" type="text" />
                            <Label>Número</Label>
                        </C.BoxInput>

                        <C.BoxInput>
                            <C.VarianteInput2 id="complement" type="text" />
                            <Label>Complemento</Label>
                        </C.BoxInput>
                    </C.BoxInputs>

                    <BoxBtns>
                        <Btn>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
