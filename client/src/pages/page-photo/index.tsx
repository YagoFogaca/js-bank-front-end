import { useContext, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Btn } from '../../styled-components/btns/index.btn';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import { WebCam } from '../../components/webcam/index.webcam';
import { Api } from '../../utils/api/api';
import * as TI from '../../styled-components/text-information/index.text';
import { PropsUseStateImg } from '../../utils/types/index.props';
import { Loading } from '../../components/loading/index.loading';

export function PagePhoto() {
    const { user } = useContext(UserContext);
    const [showConfirm, setShowConfirm] = useState(true);
    const [imgCheck, setImgCheck] = useState(false);
    const [renderImg, setRenderImg] = useState(false);
    const [img, setImg] = useState<PropsUseStateImg | any>({});
    const [imgUrl, setImgUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await Api.faceRegistration({
                documentNumber: user.documentNumber,
                image: img,
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
            ) : loading ? (
                <Loading />
            ) : (
                <WebCam
                    imgCheck={imgCheck}
                    renderImg={renderImg}
                    img={img}
                    imgUrl={imgUrl}
                    setImgUrl={setImgUrl}
                    setRenderImg={setRenderImg}
                    setImg={setImg}
                    setImgCheck={setImgCheck}
                    handleSubmit={handleSubmit}
                />
            )}
        </CardRegistration>
    );
}
