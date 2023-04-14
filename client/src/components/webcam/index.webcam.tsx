import { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import { Img } from './style.webcam';
import * as C from '../../styled-components/btns/index.btn';
import './style.fix.css';
import 'react-html5-camera-photo/build/css/index.css';

export function WebCam() {
    const [imgUser, setImgUser] = useState(false);
    const [imgUrl, setImgUrl] = useState<string>('');
    function handleTakePhoto(dataUri: string) {
        setImgUrl(dataUri);
        setImgUser(true);
    }

    return (
        <>
            {imgUser ? (
                <>
                    <Img src={imgUrl} />
                    <C.VarianteBoxBtns>
                        <C.VarianteButton
                            color="true"
                            onClick={() => setImgUser(false)}
                        >
                            Retirar foto
                        </C.VarianteButton>
                        <C.VarianteButton>Seguir</C.VarianteButton>
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
