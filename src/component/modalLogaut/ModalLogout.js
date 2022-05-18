import { useDispatch } from 'react-redux';
import React from 'react';
import './ModalLogout.scss';
import { useEffect } from 'react';
import { userOperation } from '@redux/user/user-operation';
import { closeModalLogout } from '@redux/user/user-slice';

export const ModalLogout = () => {
    const dispatch = useDispatch();
    function closeLogoutModal() {
        dispatch(closeModalLogout());
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
                    onClick={() => dispatch(userOperation.logout())}
                >
                    <span>Вийти</span>
                </button>
                <button className="btnLogout" onClick={closeLogoutModal}>
                    Отмена
                </button>
            </div>
        </div>
    );
};
