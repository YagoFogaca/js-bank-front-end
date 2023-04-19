import { useNavigate } from 'react-router-dom';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { Text } from '../../styled-components/text-information/index.text';

export function PageCheckInformation() {
    const navigate = useNavigate();
    return (
        <CardRegistration>
            <Text>
                Confira se suas informações estão corretas e altere caso esteja
                errada!
            </Text>
            <BoxBtns>
                <Btn
                    onClick={() => {
                        navigate('personal');
                    }}
                >
                    Seguir
                </Btn>
            </BoxBtns>
        </CardRegistration>
    );
}
