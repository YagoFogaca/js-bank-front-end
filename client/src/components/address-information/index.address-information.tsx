import { useState } from 'react';
import { ViaCep } from '../../utils/via-cep';
import { PropsAddress, ResViaCep } from '../../utils/types/index.props';
import { Label } from '../../styled-components/label/index.label';
import * as C from '../../styled-components/inputs/index.input';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';

export function AddressInformation({
    city,
    complement,
    number,
    state,
    street,
    zipCode,
}: PropsAddress) {
    const [addressData, setAddressData] = useState<ResViaCep>();
    const [errorCep, setErrorCep] = useState(false);
    const [addressDataCheck, setAddressDataCheck] = useState(false);

    const viaCep = async (zipCode: string) => {
        try {
            const addressData: ResViaCep = await ViaCep(zipCode);
            setAddressData(addressData);
        } catch (error) {
            console.log(error);
            setErrorCep(true);
        }
    };

    const handleZipCodeChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const zipCode = event.target.value;

        if (zipCode.length == 8) {
            setAddressDataCheck(false);
            setErrorCep(false);
            await viaCep(zipCode);
        } else if (zipCode.length > 8) {
            setAddressDataCheck(true);
        }
    };

    return (
        <>
            <C.BoxInput>
                <Label>CEP</Label>
                <C.Input
                    defaultValue={zipCode}
                    required
                    className={addressDataCheck ? 'error' : ''}
                    placeholder="00000000"
                    id="zipCode"
                    type="text"
                    onChange={handleZipCodeChange}
                />
                {addressDataCheck || errorCep ? (
                    <TE.TextError visible={addressDataCheck || errorCep}>
                        Seu CEP não foi encontrado!
                    </TE.TextError>
                ) : (
                    <TI.TextInformation>
                        Somente números, sem ponto e traço.
                    </TI.TextInformation>
                )}
            </C.BoxInput>

            <C.BoxInputs>
                <C.BoxInput>
                    <Label>Estado</Label>
                    <C.VarianteInput
                        placeholder="NJ"
                        required
                        id="state"
                        type="text"
                        defaultValue={addressData?.uf ?? state}
                    />
                </C.BoxInput>

                <C.BoxInput>
                    <Label>Cidade</Label>
                    <C.VarianteInput
                        placeholder="Gotham City"
                        required
                        id="city"
                        type="text"
                        defaultValue={addressData?.localidade ?? city}
                    />
                </C.BoxInput>
            </C.BoxInputs>

            <C.BoxInput>
                <Label>Rua</Label>
                <C.Input
                    placeholder="Rua x"
                    required
                    id="street"
                    type="text"
                    defaultValue={addressData?.logradouro ?? street}
                />
            </C.BoxInput>

            <C.BoxInputs>
                <C.BoxInput>
                    <Label>Número</Label>
                    <C.VarianteInput
                        placeholder="123"
                        required
                        id="number"
                        type="text"
                        defaultValue={number}
                    />
                    <TI.TextInformation>Somente números.</TI.TextInformation>
                </C.BoxInput>

                <C.BoxInput>
                    <Label>Complemento</Label>
                    <C.VarianteInput
                        placeholder="Apto, casa x ou uma referência"
                        id="complement"
                        type="text"
                        defaultValue={complement}
                    />
                    <TI.TextInformation>
                        Esse campo é opcional.
                    </TI.TextInformation>
                </C.BoxInput>
            </C.BoxInputs>
        </>
    );
}
