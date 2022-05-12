import sprite from '@assets/sprite.svg';

export const ButtonExit = () => {
    return (
        <button className="button_exit">
            <div className="button_exit__block">
                <svg className="button_exit__icon">
                    <use href={`${sprite}#exit`}></use>
                </svg>
            </div>
            <p className="button_exit__text">Вийти</p>
        </button>
    );
};
