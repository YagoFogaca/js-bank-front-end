import { useState } from 'react';
import { PropsFormBalance } from '../../utils/types/index.props';
import { Text } from '../../styled-components/text-information/index.text';
import { Label } from '../../styled-components/label/index.label';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import * as TE from '../../styled-components/span/index.span';
import * as C from '../../styled-components/btns/index.btn';

export function FormBalance({ setMsg }: PropsFormBalance) {
    const [error, setError] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value_deposit = parseInt(event.currentTarget.value_deposit.value);

        const balance = localStorage.getItem('balance');

        if (balance) {
            const newBalance = parseInt(balance) + value_deposit;
            localStorage.setItem('balance', newBalance.toString());
        } else {
            localStorage.setItem('balance', value_deposit.toString());
        }

        setMsg(true);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(event.currentTarget.value) <= 0) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Text>Faça seu deposito</Text>

                <BoxInput>
                    <Label>Valor de deposito</Label>
                    <Input
                        className={error ? 'error' : ''}
                        type="number"
                        min="0"
                        placeholder="R$0,00"
                        required
                        id="value_deposit"
                        name="value_deposit"
                        autoComplete="off"
                        onChange={handleOnChange}
                    />
                    {error ? (
                        <TE.TextError visible={error}>
                            Valor inválido
                        </TE.TextError>
                    ) : (
                        <></>
                    )}
                </BoxInput>
                <C.BoxBtns>
                    <C.Btn>Depositar</C.Btn>
                </C.BoxBtns>
            </form>
        </>
    );
}
