import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { PersonalInformation } from '../../components/personal-information/index.personal-information';

export function PagePersonalInformation() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fullName = event.currentTarget.fullName.value;
        const birthDate = event.currentTarget.birthDate.value;
        const phoneNumber = event.currentTarget.phoneNumber.value;
        setUser({ ...user, fullName, phoneNumber, birthDate });
        navigate('/email');
    };

    return (
        <>
            <PersonalInformation handleSubmit={handleSubmit} />
        </>
    );
}
