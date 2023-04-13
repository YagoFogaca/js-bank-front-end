import { useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';

export function PageFotos() {
    const [ showConfirm, setShowConfirm ] = useState(true);
    const [ takeFirstPhoto, setTakeFirstPhoto ] = useState(false);
    const [ takeSecondPhoto, setTakeSecondPhoto ] = useState(false);
    const [ takeThirdPhoto, setTakeThirdPhoto ] = useState(false);

    return (
        <>
        { showConfirm && 
            <CardRegistration>
                <BoxBtns>
                    <p>Vamos pedir algumas fotos para você, as fotos necessárias são de um documento com foto, seja RG ou CNH e do seu rosto.</p>
                    <Btn onClick={() => {
                      setShowConfirm(false);
                      setTakeFirstPhoto(true);
                    }}>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        }
        { takeFirstPhoto && <CardRegistration>
                <p>Tire uma foto da frente do seu documento:</p>
                <BoxBtns>
                    <Btn onClick={() => {}}>Capturar</Btn>
                    <Btn onClick={() => {}}>Corrigir</Btn>
                    <Btn onClick={() => {
                      setTakeFirstPhoto(false);
                      setTakeSecondPhoto(true);
                    }}>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        }
        { takeSecondPhoto && <CardRegistration>
                <p>Tire uma foto do verso do seu documento:</p>
                <BoxBtns>
                    <Btn onClick={() => {}}>Capturar</Btn>
                    <Btn onClick={() => {}}>Corrigir</Btn>
                    <Btn onClick={() => {
                      setTakeSecondPhoto(false);
                      setTakeThirdPhoto(true);
                    }}>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        }
        { takeThirdPhoto && <CardRegistration>
                <p>Tire uma foto do seu rosto:</p>
                <BoxBtns>
                    <Btn onClick={() => {}}>Capturar</Btn>
                    <Btn onClick={() => {}}>Corrigir</Btn>
                    <Btn>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        }
        </>
    );
}
