import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { userOperation } from '@redux/user/user-operation';
import { closeModalLogout } from '@redux/user/user-slice';
import './ModalLogout.scss';

export const ModalLogout = () => {
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function closeLogoutModal() {
        dispatch(closeModalLogout());
    }
    function closeModalAndClearLocal() {
        dispatch(userOperation.logout());
        localStorage.clear();
    }

    useEffect(() => {
        const backdrop = document.querySelector('#backdrop');

        function clickBackdrop(e) {
            if (e.target === backdrop) {
                closeLogoutModal();
            }
        }

        function pressEsc(e) {
            if (e.code === 'Escape') {
                closeLogoutModal();
            }
        }

        document.addEventListener('click', clickBackdrop);
        document.addEventListener('keydown', pressEsc);

        return function cleanup() {
            document.removeEventListener('click', clickBackdrop);
            document.removeEventListener('keydown', pressEsc);
        };
    }, [closeLogoutModal]);

    return (
        <div className="containerLogout">
            <p className="textLogout">Ви впевненні?</p>
            <div>
                <button
                    className="btnLogout"
                    type="button"
                    onClick={closeModalAndClearLocal}
                >
                    <span>Вийти</span>
                </button>
                <button className="btnLogout" onClick={closeLogoutModal}>
                    Скасувати
                </button>
            </div>
        </div>
    );
};
