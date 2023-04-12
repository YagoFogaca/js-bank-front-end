import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';

export function PageResidencia() {
    return (
        <>
            <CardRegistration>
                <BoxInput>
                    <Input required id="cep" type="text" />
                    <Label>Cep*</Label>
                </BoxInput>

                <BoxInput>
                    <Input required id="rua" type="text" />
                    <Label>Rua*</Label>
                </BoxInput>

                <BoxInput>
                    <Input required id="numero_recidemcia" type="text" />
                    <Label>Nº residencial*</Label>
                </BoxInput>

                <BoxInput>
                    <Input required id="complemento" type="text" />
                    <Label>Complemento</Label>
                </BoxInput>

                <BoxBtns>
                    <Btn>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        </>
    );
}
