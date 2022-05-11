import sprite from '@assets/sprite.svg';

export const Logo = () => {
    console.log('LOGO');
    return (
        <div className="logo">
            <svg className="logo_icon">
                <use href={`${sprite}#wallet`}></use>
            </svg>
            <p className="logo_text">Wallet</p>
        </div>
    );
};
