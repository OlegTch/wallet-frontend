import { ButtonExit } from '@common';

export const HeaderNav = () => {
    return (
        <ul className="header_nav__list">
            <li className="header_nav__item">
                <span className="header_nav__text">Имя</span>
            </li>
            <li className="header_nav__item">
                <ButtonExit />
            </li>
        </ul>
    );
};
