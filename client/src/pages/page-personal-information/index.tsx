import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { PersonalInformation } from '../../components/personal-information/index.personal-information';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { Text } from '../../styled-components/text-information/index.text';

export function PagePersonalInformation() {
    const [disabledBtn, setDisabledBtn] = useState({
        fullName: true,
        birthDate: true,
        phoneNumber: true,
    });
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fullName = event.currentTarget.fullName.value;
        const birthDate = event.currentTarget.birthDate.value;
        const phoneNumber = event.currentTarget.phoneNumber.value;
        setUser({ ...user, fullName, phoneNumber, birthDate });
        navigate('/create-account/email');
    };

    return (
        <>
            <CardRegistration>
                <Text>Agora informe seus dados pessoais</Text>
                <form onSubmit={handleSubmit}>
                    <PersonalInformation
                        setDisabledBtn={setDisabledBtn}
                        disabledBtn={disabledBtn}
                    />
                    <BoxBtns>
                        <Btn
                            disabled={
                                !(
                                    !disabledBtn.fullName &&
                                    !disabledBtn.birthDate &&
                                    !disabledBtn.phoneNumber
                                )
                            }
                            className={
                                !(
                                    !disabledBtn.fullName &&
                                    !disabledBtn.birthDate &&
                                    !disabledBtn.phoneNumber
                                )
                                    ? 'error'
                                    : ''
                            }
                        >
                            seguir
                        </Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
