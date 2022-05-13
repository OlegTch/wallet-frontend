import { useDispatch } from 'react-redux';

import sprite from '@assets/sprite.svg';
import './buttonExit.scss';

import { openModalLogout } from '@redux/user/user-slice';

export const ButtonExit = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(openModalLogout());
    };

    return (
        <button className="button_exit" onClick={onClick}>
            <div className="button_exit__block">
                <svg className="button_exit__icon">
                    <use href={`${sprite}#exit`}></use>
                </svg>
            </div>
            {window.screen.width >= 768 && (
                <p className="button_exit__text">Вийти</p>
            )}
        </button>
    );
};
