import { useSelector } from 'react-redux';

import { getName } from '@redux/user/user-selector';
import ButtonExit from '@component/buttonExit';
import './headerNav.scss';

const HeaderNav = () => {
    const userName = useSelector(getName);
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

export default HeaderNav;
