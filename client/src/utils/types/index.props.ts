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

export type ResViaCep = {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
};

export type WebCamProps = {
    renderImg: boolean;
    img: FormData | any;
    imgUrl: string;
    imgCheck: boolean;
    setImgUrl: (dataUri: string) => void;
    setImg: (dataUri: FormData | any) => void;
    setRenderImg: (img: boolean) => void;
    setImgCheck: (imgCheck: boolean) => void;
    handleSubmit: () => void;
};

export type PropsInformation = {
    textFullName?: string;
    textBirthDate?: string;
    textPhoneNumber?: string;
    disabledBtn?: any;
    setDisabledBtn: (value: any) => void;
};

export type PropsAddress = {
    zipCode?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
};

export type PropsUseStateImg = {
    lastModified: number;
    lastModifiedDate: any;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string | any;
};
