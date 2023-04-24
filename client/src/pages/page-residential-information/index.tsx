import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { Text } from '../../styled-components/text-information/index.text';
import { AddressInformation } from '../../components/address-information/index.address-information';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';

export function PageResidential() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const street = event.currentTarget.street.value;
        const number = event.currentTarget.number.value;
        const complement = event.currentTarget.complement.value;
        const city = event.currentTarget.city.value;
        const state = event.currentTarget.state.value;
        const zipCode = event.currentTarget.zipCode.value;

        const homeAddress = `${city}, ${state}, ${street}, ${number}${
            complement ? ', ' + complement : ''
        }`;
        setUser({ ...user, homeAddress, zipCode });
        navigate('/photo');
    };

    return (
        <>
            <CardRegistration>
                <Text>Agora é seu endereço.</Text>
                <form onSubmit={handleSubmit}>
                    <AddressInformation />
                    <BoxBtns>
                        <Btn>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
