import { useState } from 'react';
import { ViaCep } from '../../utils/via-cep';
import { ResViaCep } from '../../utils/types/index.props';
import * as C from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { SpanError } from '../../styled-components/span/index.span';

// Receber o cep e chamar pela api
export function AddressInformation() {
    const [addressData, setAddressData] = useState<ResViaCep>();
    const [errorCep, setErrorCep] = useState(false);
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
            await viaCep(zipCode);
        }
    };

    return (
        <>
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
        </>
    );
}
