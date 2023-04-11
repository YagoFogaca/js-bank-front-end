import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';

export function PageCpf() {
    const OnSubmitFormCpf = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <>
            <CardRegistration>
                <form onSubmit={OnSubmitFormCpf}>
                    <BoxInput>
                        <Input required id="cpf" />
                        <Label>Cpf</Label>
                    </BoxInput>
                    <BoxBtns>
                        <Btn>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
