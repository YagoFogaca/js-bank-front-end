import { useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';

export function PageEmail() {
    const [ codeSent, setCodeSent ] = useState(false);

    return (
        <>
        { !codeSent ? 
            <CardRegistration>
                <BoxInput>
                    <Input required id="email" type="email" />
                    <Label>Email</Label>
                </BoxInput>

                <BoxBtns>
                    <Btn onClick={() => { setCodeSent(true); }}>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        : 
            <CardRegistration>
                <p>Enviamos um código de validação para o e-mail informado. Ele tem duração de 15 minutos.</p>
                <br></br>
                <BoxInput>
                    <Input required id="codigo-validacao" type="text" />
                    <Label>Código de validação</Label>
                </BoxInput>

                <BoxBtns>
                    <Btn onClick={() => { setCodeSent(false); }}>Reenviar código</Btn>
                    <Btn>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        }
        </>
    );
}
