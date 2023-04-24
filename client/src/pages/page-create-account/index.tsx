import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Api } from '../../utils/api/api';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Loading } from '../../components/loading/index.loading';
import { VarianteText } from '../../styled-components/text-information/index.text';
import { CgCheck } from 'react-icons/cg';

export function CreateAccount() {
    const { user } = useContext(UserContext);

    const createUser = async () => {
        try {
            return await Api.createUser(user);
            // setMsg('Obrigador por escolher fazer parte da familia JSBANK');
            // setCreatedAccount(true);
            // setMsg('Conta criada com sucesso. Clique aqui para fazer login.');
            // const secondTimeoutId = setTimeout(() => {
            //     setCreatedAccount(true);
            //     setMsg(
            //         'Conta criada com sucesso. Clique aqui para fazer login.',
            //     );
            // }, 10000);

            // return () => clearTimeout(secondTimeoutId);
        } catch (error) {
            console.log(error);
            setMsg('Deu erro ai otario.');
        }
    };

    const [createdAccount, setCreatedAccount] = useState(false);
    const [msg, setMsg] = useState(
        'Estamos processando suas informações. Aguarde!',
    );

    useEffect(() => {
        console.log(createUser());
    }, [user]);

    return (
        <CardRegistration>
            {createdAccount ? (
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
