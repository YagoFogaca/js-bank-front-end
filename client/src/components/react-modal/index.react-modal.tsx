import Modal from 'react-modal';
import { useState } from 'react';
import { PropsReactModal } from '../../utils/types/index.props';
import { HiX } from 'react-icons/hi';
import { DivModal } from './style.react-modal';
import { Text } from '../../styled-components/text-information/index.text';
import { BoxInput, Input } from '../../styled-components/inputs/index.input';
import { Label } from '../../styled-components/label/index.label';
import * as C from '../../styled-components/btns/index.btn';
import * as TI from '../../styled-components/text-information/index.text';
import * as TE from '../../styled-components/span/index.span';

const customStyles = {
    content: {
        width: '40%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '15px',
    },
};

Modal.setAppElement('#root');

export function ReactModal({ modalIsOpen, setIsOpen }: PropsReactModal) {
    const [error, setError] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

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

        closeModal();
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(event.currentTarget.value) <= 0) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <DivModal>
                <HiX
                    size={31}
                    style={{
                        transform: 'rotate(90deg)',
                        cursor: 'pointer',
                        position: 'relative',
                        color: '#f00',
                    }}
                    onClick={closeModal}
                />
            </DivModal>
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
        </Modal>
    );
}
