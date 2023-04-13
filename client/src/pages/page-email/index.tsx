import { useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import * as C from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';

export function PageEmail() {
    const [codeSent, setCodeSent] = useState(false);

    return (
        <>
            {!codeSent ? (
                <CardRegistration>
                    <BoxInput>
                        <Input required id="email" type="email" />
                        <Label>Email</Label>
                    </BoxInput>

                    <C.BoxBtns>
                        <C.Btn
                            onClick={() => {
                                setCodeSent(true);
                            }}
                        >
                            Seguir
                        </C.Btn>
                    </C.BoxBtns>
                </CardRegistration>
            ) : (
                <CardRegistration>
                    <p>
                        Enviamos um código de validação para o e-mail informado.
                        Ele tem duração de 15 minutos.
                    </p>
                    <br></br>
                    <BoxInput>
                        <Input required id="codigo_validacao" type="text" />
                        <Label>Insira o Código</Label>
                    </BoxInput>

                    <C.VarianteBoxBtns>
                        <C.VarianteButton
                            color="true"
                            onClick={() => {
                                setCodeSent(false);
                            }}
                        >
                            Reenviar código
                        </C.VarianteButton>
                        <C.VarianteButton>Seguir</C.VarianteButton>
                    </C.VarianteBoxBtns>
                </CardRegistration>
            )}
        </>
    );
}
