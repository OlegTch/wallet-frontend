import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import './ModalLogout.scss';
import { NavLink } from 'react-router-dom';
import { userOperation } from '@redux/user/user-operation';
import { closeModalLogout } from '@redux/user/user-slice';
import { isAuth } from '@redux/user/user-selector';

export const ModalLogout = () => {
    const dispatch = useDispatch();
    function closeLogoutModal() {
        dispatch(closeModalLogout());
    }

    return (
        <div className="containerLogout">
            <p className="textLogout">Вы уверены?</p>
            <div>
                <button
                    className="btnLogout"
                    type="button"
                    onClick={() => dispatch(userOperation.logout())}
                >
                    <span>Выйти</span>
                </button>
                <button className="btnLogout" onClick={closeLogoutModal}>
                    Отмена
                </button>
            </div>
        </div>
    );
};
