import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';

export function PageEmail() {
    return (
        <>
            <CardRegistration>
                <BoxInput>
                    <Input required id="email" type="email" />
                    <Label>Email</Label>
                </BoxInput>

                <BoxBtns>
                    <Btn>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        </>
    );
}