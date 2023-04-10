import * as C from './style.card-registration';

export function CardRegistration() {
    return (
        <C.SectionRegistration>
            <C.DivRegistration>
                <div>
                    <C.ImgLogo src="/logo.svg" alt="" />
                </div>
                <C.DivForm>
                    <form>
                        <C.BoxInput>
                            <C.Input type="text" name="" required />
                            <C.Label>CPF</C.Label>
                        </C.BoxInput>

                        <C.BoxBtns>
                            <C.Btn>Seguir</C.Btn>
                        </C.BoxBtns>
                    </form>
                </C.DivForm>
            </C.DivRegistration>
        </C.SectionRegistration>
    );
}
