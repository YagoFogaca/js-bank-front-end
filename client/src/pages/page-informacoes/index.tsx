import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';

export function PageInformacoes() {
    const OnSubmitFormPersonalInfo = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
    };
    return (
        <>
            <CardRegistration>
                <form onSubmit={OnSubmitFormPersonalInfo}>
                    <BoxInput>
                        <Input required id="nome" />
                        <Label>Nome completo</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input required id="tel" />
                        <Label>Telefone</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input
                            required
                            id="data_nascimento"
                            type="date"
                            placeholder=""
                        />
                        <Label>Data de nascimento</Label>
                    </BoxInput>

                    <BoxBtns>
                        <Btn>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
