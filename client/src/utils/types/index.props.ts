import { ReactNode } from 'react';

export type PorpsCardRegistration = {
    children: ReactNode;
};

export type PropsSpanError = {
    visible?: boolean;
};

export type PropsVarianteButton = {
    color?: string;
};

export type ValidateInfos = {
    valid: boolean;
    message: string;
};

export type ResViaCep = {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
};

export type WebCamProps = {
    text: string;
    renderImg: boolean;
    imgUrl: string;
    setImgUrl: (dataUri: string) => void;
    setRenderImg: (img: boolean) => void;
    handleSubmit: () => void;
};

export type PropsPersonalInformation = {
    textFullName?: string;
    textBirthDate?: string;
    textPhoneNumber?: string;
    textBtn?: string;
};
