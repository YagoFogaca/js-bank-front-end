import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ViaCep = async (zipCode: string) => {
    const res = (await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`))
        .data;
    if (res.erro) {
        throw new Error('CEP invalido');
    }
    return res;
};
