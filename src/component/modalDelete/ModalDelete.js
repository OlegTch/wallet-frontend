import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import { closeModalDeleteTransaction } from '@redux/finance/finance-slice';
import { getDeleteId, isLoading } from '@redux/finance/finance-selector';
import './ModalDelete.scss';

const ModalDelete = () => {
    const dispatch = useDispatch();
    const id = useSelector(getDeleteId);
    const [isDelete, setIsDelete] = useState(false);
    const isLoadingTrans = useSelector(isLoading);

    const closeDeleteModal = () => {
        dispatch(closeModalDeleteTransaction());
    };

    const onClickYes = e => {
        e.target.style.disabled = true;
        dispatch(getFinanceOpertaion.deleteOperation(id));
        setIsDelete(true);
        console.log('Click delete');
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

    useEffect(() => {
        if (!isLoadingTrans && isDelete) {
            console.log('===========================');
            closeDeleteModal();
        }
    }, [isLoadingTrans, isDelete]);

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
                    disabled={isDelete}
                >
                    <span>Видалити</span>
                </button>

                <button
                    className="btnDelete"
                    onClick={closeDeleteModal}
                    disabled={isDelete}
                >
                    Скасувати
                </button>
            </div>
        </div>
    );
};

export default ModalDelete;
