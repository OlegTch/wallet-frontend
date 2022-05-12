import { ButtonExit } from '@shared';

export const HeaderNav = () => {
    const userName = 'Имя';
    return (
        <ul className="header_nav__list">
            <li className="header_nav__item">
                <span className="header_nav__text">{userName}</span>
            </li>
            <li className="header_nav__item">
                <ButtonExit />
            </li>
        </ul>
    );
};
