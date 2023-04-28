import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Api } from '../../utils/api/api';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Loading } from '../../components/loading/index.loading';
import { VarianteText } from '../../styled-components/text-information/index.text';
import { CgCheck } from 'react-icons/cg';
import { BiError } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export function CreateAccount() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [createdAccount, setCreatedAccount] = useState(false);
    const [errorCreatedAccount, setErrorCreatedAccount] = useState(false);
    const [msg, setMsg] = useState(
        'Estamos processando suas informações. Aguarde!',
    );

    const createUser = async () => {
        try {
            await Api.createUser(user);
            setCreatedAccount(true);
            setMsg(
                'Sua conta foi criada com sucesso. Em 5 segundos você será direcionado para fazer login.',
            );

            setTimeout(() => {
                navigate('/platform/');
            }, 5000);
        } catch (error) {
            console.log(error);
            setErrorCreatedAccount(true);
            setMsg(
                'Ocorreu um erro ao criar sua conta. Revise suas informações.',
            );
        }
    };

    useEffect(() => {
        createUser();
    }, []);

    return (
        <CardRegistration>
            {createdAccount || errorCreatedAccount ? (
                <>
                    <div style={{ margin: '0 auto', width: 'fit-content' }}>
                        {errorCreatedAccount ? (
                            <BiError
                                size={62}
                                color="red"
                                style={{ margin: '0 auto' }}
                            />
                        ) : (
                            <CgCheck
                                size={62}
                                color="green"
                                style={{ margin: '0 auto' }}
                            />
                        )}
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
