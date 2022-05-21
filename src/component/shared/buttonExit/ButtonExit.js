import { useDispatch } from 'react-redux';
import Media from 'react-media';

import { openModalLogout } from '@redux/user/user-slice';
import { globalMedia } from '@data';
import sprite from '@assets/sprite.svg';
import './buttonExit.scss';

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
            <Media queries={globalMedia}>
                {matches => (
                    <>
                        {matches.medium && (
                            <p className="button_exit__text">Вийти</p>
                        )}
                    </>
                )}
            </Media>
        </button>
    );
};
