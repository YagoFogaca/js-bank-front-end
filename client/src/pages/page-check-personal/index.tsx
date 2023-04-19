import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { PersonalInformation } from '../../components/personal-information/index.personal-information';

export function PageCheckPersonal() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fullName = event.currentTarget.fullName.value;
        const birthDate = event.currentTarget.birthDate.value;
        const phoneNumber = event.currentTarget.phoneNumber.value;
        console.log(fullName);
        console.log(birthDate);
        console.log(phoneNumber);
        // setUser({ ...user, fullName, phoneNumber, birthDate });
        // navigate('/email');
    };
    return (
        <PersonalInformation
            handleSubmit={handleSubmit}
            textFullName={user.fullName}
            textBirthDate={user.birthDate}
            textPhoneNumber={user.phoneNumber}
        />
    );
}
