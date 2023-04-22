import { WebCamProps } from '../../utils/types/index.props';
import Camera from 'react-html5-camera-photo';
import { Img } from './style.webcam';
import * as C from '../../styled-components/btns/index.btn';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';
import './style.fix.css';
import 'react-html5-camera-photo/build/css/index.css';

export function WebCam({
    imgCheck,
    imgUrl,
    renderImg,
    handleSubmit,
    setImgUrl,
    setImgCheck,
    setRenderImg,
}: WebCamProps) {
    function handleTakePhoto(dataUri: string) {
        if (imgCheck) {
            setImgCheck(false);
        }
        setImgUrl(dataUri);
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
