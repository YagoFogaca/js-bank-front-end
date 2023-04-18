import axios from 'axios';
import { UserContextType } from '../types/index.context';

axios.defaults.baseURL =
    'http://jsbankbackend-env.eba-zpap2t6g.us-east-1.elasticbeanstalk.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class Api {
    static async findDocumentNumber(documentNumber: string | undefined) {
        return (await axios.get(`/documents/${documentNumber}`)).data;
    }

    static async sendEmailCode(emailAddress: string) {
        return (await axios.post(`/codes/send/`, emailAddress)).data;
    }

    static async verifyEmailCode(data: {
        emailAddress: string;
        emailCode: string;
    }) {
        return (await axios.post(`/verify/codes`, data)).data;
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
