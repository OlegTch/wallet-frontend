import sprite from '@assets/sprite.svg';
import './buttonExit.scss';

export const ButtonExit = () => {
    return (
        <button className="button_exit">
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
