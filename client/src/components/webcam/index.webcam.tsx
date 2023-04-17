import { WebCamProps } from '../../utils/types/index.props';
import Camera from 'react-html5-camera-photo';
import { Text } from '../../styled-components/text-information/index.text';
import { Img } from './style.webcam';
import * as C from '../../styled-components/btns/index.btn';
import './style.fix.css';
import 'react-html5-camera-photo/build/css/index.css';

export function WebCam({
    text,
    renderImg,
    imgUrl,
    setRenderImg,
    setImgUrl,
    handleSubmit,
}: WebCamProps) {
    function handleTakePhoto(dataUri: string) {
        setImgUrl(dataUri);
        setRenderImg(true);
    }

    return (
        <>
            <Text>{text}</Text>
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
