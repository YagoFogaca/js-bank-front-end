import axios from 'axios';
import { UserContextType } from '../types/index.context';

axios.defaults.baseURL = 'https://jsbank-back-end.onrender.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class Api {
    static async findDocumentNumber(documentNumber: string | undefined) {
        return (await axios.get(`/documents/verify/${documentNumber}`)).data;
    }

    static async sendEmailCode(data: { emailAddress: string }) {
        return (await axios.post(`/codes/send`, data)).data;
    }

    static async verifyEmailCode(data: {
        emailAddress: string;
        emailCode: string;
    }) {
        return (await axios.post(`/codes/verify`, data)).data;
    }

    static async faceRegistration(data: {
        documentNumber: string;
        imageBase64: string | undefined;
    }) {
        return (await axios.post(`/faces/register`, data)).data;
    }

    static async createUser(data: UserContextType) {
        return (await axios.post('/accounts', data)).data;
    }
}
