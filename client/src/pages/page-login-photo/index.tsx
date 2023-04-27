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

export function PageLoginPhoto() {
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
            await Api.faceAuthentication({
                documentNumber: localStorage.getItem('documentNumber'),
                image: img,
            });
            setLoading(false);
            navigate('/platform/app');
        } catch (error) {
            setLoading(false);
            setImgCheck(true);
            setRenderImg(false);
        }
    };

    return (
        <CardRegistration>
            {showConfirm ? (
                <>
                    <TI.Text>Confirme sua identidade com uma foto</TI.Text>
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
