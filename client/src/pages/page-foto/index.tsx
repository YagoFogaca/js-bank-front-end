import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { Text } from '../../styled-components/text-information/index.text';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import { WebCam } from '../../components/webcam/index.webcam';
import { Api } from '../../utils/api/api';

export function PageFoto() {
    const [showConfirm, setShowConfirm] = useState(true);
    const [renderImg, setRenderImg] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            // await Api.faceRegistration({ documentNumber: user.documentNumber, imageBase64: photo });
            // Redirecionar o usuário para a pagina seguinte
            navigate('/teste');
        } catch (error) {
            // Mensagem de erro ao registrar o rosto
        }
    };

    return (
        <CardRegistration>
            {showConfirm ? (
                <>
                    <Text>
                        Vamos pedir algumas fotos para você, as fotos
                        necessárias são de um documento com foto, seja RG ou CNH
                        e do seu rosto.
                    </Text>
                    <Btn
                        onClick={() => {
                            setShowConfirm(false);
                        }}
                    >
                        Seguir
                    </Btn>
                </>
            ) : (
                <WebCam
                    text="Certifique-se que a foto esteja adequada"
                    renderImg={renderImg}
                    imgUrl={imgUrl}
                    setRenderImg={setRenderImg}
                    setImgUrl={setImgUrl}
                    handleSubmit={handleSubmit}
                />
            )}
        </CardRegistration>
    );
}
