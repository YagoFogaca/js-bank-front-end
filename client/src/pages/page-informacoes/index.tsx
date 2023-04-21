import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { PersonalInformation } from '../../components/personal-information/index.personal-information';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';

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
        console.log(fullName, birthDate, phoneNumber);
        setUser({ ...user, fullName, phoneNumber, birthDate });
        navigate('/email');
    };

    return (
        <>
            <CardRegistration>
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
                        >
                            seguir
                        </Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
