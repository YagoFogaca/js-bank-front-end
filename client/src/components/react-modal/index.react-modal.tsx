import Modal from 'react-modal';
import { useState } from 'react';
import { PropsReactModal } from '../../utils/types/index.props';
import { HiOutlineBadgeCheck, HiX } from 'react-icons/hi';
import { DivModal, PText } from './style.react-modal';
import { FormBalance } from '../form-balance/index.form-balance';
import * as C from '../../styled-components/btns/index.btn';

const customStyles = {
    content: {
        width: '60%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '15px',
    },
    overlay: {
        backgroundColor: '#000000da',
    },
};

Modal.setAppElement('#root');

export function ReactModal({ modalIsOpen, setIsOpen }: PropsReactModal) {
    const [msg, setMsg] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
        setMsg(false);
    };

    const newBalance = () => {
        setMsg(false);
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

            {msg ? (
                <>
                    <PText>
                        Depósito realizado com sucesso
                        <HiOutlineBadgeCheck
                            size={31}
                            style={{ color: 'rgb(1 151 1)' }}
                        />
                    </PText>
                    <C.VarianteBoxBtns>
                        <C.VarianteButton color="true" onClick={newBalance}>
                            Novo depósito
                        </C.VarianteButton>
                        <C.VarianteButton onClick={closeModal}>
                            Sair
                        </C.VarianteButton>
                    </C.VarianteBoxBtns>
                </>
            ) : (
                <FormBalance setMsg={setMsg} />
            )}
        </Modal>
    );
}
