import sprite from '@assets/sprite.svg';

export const Logo = () => {
    return (
        <div className="logo">
            <svg className="logo_icon">
                <use href={`${sprite}#wallet`}></use>
            </svg>
            <p className="logo_text">Wallet</p>
        </div>
    );
};
