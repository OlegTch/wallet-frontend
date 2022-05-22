import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import { closeModalDeleteTransaction } from '@redux/finance/finance-slice';
import { getDeleteId } from '@redux/finance/finance-selector';
import './ModalDelete.scss';

const ModalDelete = () => {
    const dispatch = useDispatch();
    const id = useSelector(getDeleteId);

    const closeDeleteModal = () => {
        dispatch(closeModalDeleteTransaction());
    };

    const onClickYes = e => {
        console.log('Delete transaction');
        e.target.style.disable = true;
        console.log(id);
        dispatch(getFinanceOpertaion.deleteOperation(id));
    };

    useEffect(() => {
        const backdrop = document.querySelector('#backdrop');

        function clickBackdrop(e) {
            if (e.target === backdrop) {
                closeDeleteModal();
            }
        }

        function pressEsc(e) {
            if (e.code === 'Escape') {
                closeDeleteModal();
            }
        }

        document.addEventListener('click', clickBackdrop);
        document.addEventListener('keydown', pressEsc);

        return function cleanup() {
            document.removeEventListener('click', clickBackdrop);
            document.removeEventListener('keydown', pressEsc);
        };
    }, [closeDeleteModal]);

    return (
        <div className="containerDelete">
            <p className="textDelete">
                Ви впевненні, що хочете видалити транзакцію?
            </p>
            <div>
                <button
                    className="btnDelete"
                    type="button"
                    onClick={onClickYes}
                >
                    <span>Видалити</span>
                </button>
                <button className="btnDelete" onClick={closeDeleteModal}>
                    Скасувати
                </button>
            </div>
        </div>
    );
};

export default ModalDelete;
