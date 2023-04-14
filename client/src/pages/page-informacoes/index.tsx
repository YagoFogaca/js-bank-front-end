import { useContext } from 'react';
import { CardRegistration } from '../../components/card-registration/index.card-registration';
import { BoxBtns, Btn } from '../../styled-components/btns/index.btn';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';

export function PageInformacoes() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        const fullName = event.currentTarget.birthDate.value;
        const phoneNumber = event.currentTarget.birthDate.value;
        const birthDate = event.currentTarget.birthDate.value;

        // Validação do nome completo, número de telefone e data de nascimento

        setUser({ ...user, fullName, phoneNumber, birthDate });
        navigate('/email');
    };
    return (
        <>
            <CardRegistration>
                <p>Precisamos de algumas informações pessoais.</p>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <BoxInput>
                        <Input required id="fullName" />
                        <Label>Nome completo</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input required id="phoneNumber" />
                        <Label>Telefone</Label>
                    </BoxInput>

                    <BoxInput>
                        <Input
                            required
                            id="birthDate"
                            type="date"
                            placeholder=""
                        />
                        <Label>Data de nascimento</Label>
                    </BoxInput>

                    <BoxBtns>
                        <Btn>Seguir</Btn>
                    </BoxBtns>
                </form>
            </CardRegistration>
        </>
    );
}
