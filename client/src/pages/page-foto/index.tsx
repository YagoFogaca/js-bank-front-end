import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Btn } from '../../styled-components/btns/index.btn';
import { Text } from '../../styled-components/text-information/index.text';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import { WebCam } from '../../components/webcam/index.webcam';
import { Api } from '../../utils/api/api';
import { ValidateInfos } from '../../utils/types/index.props';

export function PagePhoto() {
    const [showConfirm, setShowConfirm] = useState<ValidateInfos>({
        message: '',
        valid: true,
    });
    const [renderImg, setRenderImg] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await Api.faceRegistration({
                documentNumber: user.documentNumber,
                imageBase64: imgUrl,
            });
            navigate('/check-information/');
        } catch (error) {
            console.log(error);
            setShowConfirm({
                message:
                    'Ocorreu um error ao processar a sua foto. Tire outra!',
                valid: false,
            });
            setRenderImg(false);
        }
    };

    return (
        <CardRegistration>
            {showConfirm.valid ? (
                <>
                    <Text>
                        Vamos pedir algumas fotos para você, as fotos
                        necessárias são de um documento com foto, seja RG ou CNH
                        e do seu rosto.
                    </Text>
                    <Btn
                        onClick={() => {
                            setShowConfirm({
                                message:
                                    'Certifique-se que a foto esteja adequada',
                                valid: false,
                            });
                        }}
                    >
                        Seguir
                    </Btn>
                </>
            ) : (
                <WebCam
                    text={showConfirm.message}
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
