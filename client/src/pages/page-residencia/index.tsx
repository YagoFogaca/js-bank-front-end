import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { Api } from '../../utils/api/api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';

type addressDataType = {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
};

export function PageResidencia() {
    const [addressData, setAddressData] = useState<addressDataType>();
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const zipCodeChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        event.preventDefault();

        const zipCode = event.target.value;

        if (zipCode.length == 8) {
            try {
                const addressData: addressDataType = await Api.findZipCode(
                    zipCode,
                );
                setAddressData(addressData);
            } catch (error) {
                // Mensagem de CEP inválido
            }
        }
    };

    const setHomeAddress = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const street = event.currentTarget.street.value;
        const number = event.currentTarget.number.value;
        const complement = event.currentTarget.complement.value;
        const city = event.currentTarget.city.value;
        const state = event.currentTarget.state.value;

        const homeAddress = `${street}, ${number}, ${complement}, ${city}, ${state}`;

        setUser({ ...user, homeAddress });

        navigate('/foto');
    };

    return (
        <>
            <CardRegistration>
                <p>Insira suas informações residenciais</p>
                <br></br>
                <form>
                    <BoxInput>
                        <Input
                            required
                            id="zipCode"
                            type="text"
                            onChange={zipCodeChange}
                        />
                        <Label>CEP</Label>
                    </BoxInput>
                </form>

                <form onSubmit={setHomeAddress}>
                    <BoxInput>
                        <Input
                            required
                            id="street"
                            type="text"
                            defaultValue={addressData?.logradouro}
                        />
                        <Label>Rua</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input required id="number" type="text" />
                        <Label>Número</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input id="complement" type="text" />
                        <Label>Complemento</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input
                            required
                            id="city"
                            type="text"
                            defaultValue={addressData?.localidade}
                        />
                        <Label>Cidade</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input
                            required
                            id="state"
                            type="text"
                            defaultValue={addressData?.uf}
                        />
                        <Label>Estado</Label>
                    </BoxInput>

                    <BoxBtns>
                        <Btn>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
