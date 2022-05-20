import { useSelector } from 'react-redux';

import { getName } from '@redux/user/user-selector';
import { ButtonExit } from '@shared';
import './headerNav.scss';
import { SelectLang } from '@component';

export const HeaderNav = () => {
    const userName = useSelector(getName);
    return (
        <ul className="header_nav__list">
            <li className="header_nav__item">
                <span className="header_nav__text">{userName}</span>
            </li>
            <li className="header_nav__item">
                <SelectLang />
            </li>
            <li className="header_nav__item">
                <ButtonExit />
            </li>
        </ul>
    );
};
