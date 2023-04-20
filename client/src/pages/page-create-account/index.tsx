import { useEffect, useState } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Loading } from '../../components/loading/index.loading';
import { VarianteText } from '../../styled-components/text-information/index.text';
import { CgCheck } from 'react-icons/cg';

export function CreateAccount() {
    const [teste, setTeste] = useState(false);
    const [msg, setMsg] = useState(
        'Estamos processando suas informações. Aguarde!',
    );
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setMsg('Obrigador por escolher fazer parte da familia JSBANK');
            const secondTimeoutId = setTimeout(() => {
                setTeste(true);
                setMsg(
                    'Conta criada com sucesso. Clique aqui para fazer login.',
                );
            }, 10000);

            return () => clearTimeout(secondTimeoutId);
        }, 25000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <CardRegistration>
            {teste ? (
                <>
                    <div style={{ margin: '0 auto', width: 'fit-content' }}>
                        <CgCheck
                            size={62}
                            color="green"
                            style={{ margin: '0 auto' }}
                        />
                    </div>
                    <VarianteText>{msg}</VarianteText>
                </>
            ) : (
                <>
                    <Loading />
                    <VarianteText>{msg}</VarianteText>
                </>
            )}
        </CardRegistration>
    );
}
