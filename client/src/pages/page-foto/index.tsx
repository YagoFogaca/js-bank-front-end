import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Btn } from '../../styled-components/btns/index.btn';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import { WebCam } from '../../components/webcam/index.webcam';
import { Api } from '../../utils/api/api';
import * as TI from '../../styled-components/text-information/index.text';

export function PagePhoto() {
    const [showConfirm, setShowConfirm] = useState(true);
    const [imgCheck, setImgCheck] = useState(false);
    const [renderImg, setRenderImg] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const { user } = useContext(UserContext);
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
            setImgCheck(true);
            setRenderImg(false);
        }
    };

    return (
        <CardRegistration>
            {showConfirm ? (
                <>
                    <TI.Text>
                        Agora é hora de algumas fotos, vamos precisar de um
                        documento com foto e do seu rosto. Mas fique tranquilo,
                        essas fotos são serão divulgadas.
                    </TI.Text>
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
                    imgCheck={imgCheck}
                    renderImg={renderImg}
                    imgUrl={imgUrl}
                    setRenderImg={setRenderImg}
                    setImgUrl={setImgUrl}
                    setImgCheck={setImgCheck}
                    handleSubmit={handleSubmit}
                />
            )}
        </CardRegistration>
    );
}
