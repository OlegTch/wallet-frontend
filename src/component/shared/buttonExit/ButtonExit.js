import { useDispatch } from 'react-redux';
import Media from 'react-media';

import sprite from '@assets/sprite.svg';
import './buttonExit.scss';

import { openModalLogout } from '@redux/user/user-slice';
import { globalMedia } from '@data';
import { useTranslation } from 'react-i18next';

export const ButtonExit = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onClick = () => {
        dispatch(openModalLogout());
        // dispatch(userOperation.logout());
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
                            <p className="button_exit__text">{t('exit')}</p>
                        )}
                    </>
                )}
            </Media>
        </button>
    );
};
