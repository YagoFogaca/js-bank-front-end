import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import Camera from 'react-html5-camera-photo';
import { Img } from '../../components/webcam/style.webcam';
import * as C from '../../styled-components/btns/index.btn';
import '../../components/webcam/style.fix.css';
import 'react-html5-camera-photo/build/css/index.css';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../utils/types/api/api';

export function PageFoto() {
    const [ showConfirm, setShowConfirm ] = useState(true);
    const [ takedPhoto, setTakedPhoto ] = useState(false);
    const [ photo, setPhoto] = useState<string>();
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const faceRegistration = async () => {
        try {
            // await Api.faceRegistration({ documentNumber: user.documentNumber, imageBase64: photo });

            // Redirecionar o usuário para a pagina seguinte
        } catch (error) {
            // Mensagem de erro ao registrar o rosto
        }
    }

    return (
        <>
        { showConfirm ? 
            <CardRegistration>
                <BoxBtns>
                    <p>Vamos pedir algumas fotos para você, as fotos necessárias são de um documento com foto, seja RG ou CNH e do seu rosto.</p>
                    <Btn onClick={() => {
                      setShowConfirm(false);
                    }}>Seguir</Btn>
                </BoxBtns>
            </CardRegistration>
        :   <CardRegistration>
                <p>Tire uma foto do seu rosto:</p>
                { takedPhoto ? (
                    <>
                        <Img src={photo} />
                        <C.VarianteBoxBtns>
                            <C.VarianteButton
                                color="true"
                                onClick={() => setTakedPhoto(false)}
                            >
                                Retirar foto
                            </C.VarianteButton>
                            <C.VarianteButton onClick={() => {
                                faceRegistration();
                            }}>Seguir</C.VarianteButton>
                        </C.VarianteBoxBtns>
                    </>
                ) : (
                    <>
                        <Camera
                            imageType={'png'}
                            onTakePhoto={imageBase64 => {
                                setPhoto(imageBase64);
                                setTakedPhoto(true);
                            }}
                        />
                    </>
                ) }
            </CardRegistration> 
        }
        </>
    );
}
