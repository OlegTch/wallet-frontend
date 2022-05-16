import sprite from '@assets/sprite.svg';
import './logo.scss';

export const Logo = () => {
    return (
        <div className="logo">
            <a href="/" className="logo_link">
                <svg className="logo_icon">
                    <use href={`${sprite}#wallet`}></use>
                </svg>
                <p className="logo_text">Wallet</p>
            </a>
        </div>
    );
};
