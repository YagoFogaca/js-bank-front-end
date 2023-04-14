import axios from 'axios';
import { UserContextType } from '../types/index.context';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class Api {
    static async findDocumentNumber(documentNumber: string | undefined) {
        return (await axios.get(`/documents/${documentNumber}`)).data;
    }

    static async findEmailAddress(emailAddress: string) {
        return (await axios.get(`/emails/${emailAddress}`)).data;
    }

    static async sendEmailCode(emailAddress: string) {
        return (await axios.get(`/send/codes/${emailAddress}`)).data;
    }

    static async verifyEmailCode(data: {
        emailAddress: string;
        emailCode: string;
    }) {
        return (await axios.post(`/verify/codes`, data)).data;
    }

    static async findZipCode(zipCode: string) {
        return (await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`))
            .data;
    }

    static async faceRegistration(data: {
        documentNumber: string;
        imageBase64: string | undefined;
    }) {
        return (await axios.post(`/registration/faces`, data)).data;
    }

    static async createUser(data: UserContextType) {
        return (await axios.post('/users', data)).data;
    }
}
