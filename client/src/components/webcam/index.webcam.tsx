import { WebCamProps } from '../../utils/types/index.props';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import Camera from 'react-html5-camera-photo';
import { Img } from './style.webcam';
import * as C from '../../styled-components/btns/index.btn';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';
import './style.fix.css';
import 'react-html5-camera-photo/build/css/index.css';

export function WebCam({
    imgCheck,
    img,
    renderImg,
    imgUrl,
    setImgUrl,
    handleSubmit,
    setImg,
    setImgCheck,
    setRenderImg,
}: WebCamProps) {
    function handleTakePhoto(dataUri: string) {
        const byteCharacters = atob(dataUri.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const file = new File([byteArray], 'image.png', {
            type: 'image/png',
        });

        const formData = new FormData();
        formData.append('image', file);

        if (imgCheck) {
            setImgCheck(false);
        }
        setImgUrl(dataUri);
        setImg(formData.getAll('image')[0]);
        setRenderImg(true);
    }

    return (
        <>
            {imgCheck ? (
                <TE.TextErrorVariante>
                    Ocorreu um error ao processar a sua foto. Tire outra!
                </TE.TextErrorVariante>
            ) : (
                <TI.Text>Certifique-se que a foto esteja adequada.</TI.Text>
            )}

            {renderImg ? (
                <>
                    <Img src={imgUrl} />
                    <C.VarianteBoxBtns>
                        <C.VarianteButton
                            color="true"
                            onClick={() => setRenderImg(false)}
                        >
                            Retirar foto
                        </C.VarianteButton>
                        <C.VarianteButton onClick={handleSubmit}>
                            Seguir
                        </C.VarianteButton>
                    </C.VarianteBoxBtns>
                </>
            ) : (
                <>
                    <Camera
                        imageType={'png'}
                        onTakePhoto={dataUri => {
                            handleTakePhoto(dataUri);
                        }}
                    />
                </>
            )}
        </>
    );
}
