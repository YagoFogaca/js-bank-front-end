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
