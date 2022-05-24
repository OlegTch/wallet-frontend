import { useSelector, useDispatch } from 'react-redux';

import { getName } from '@redux/user/user-selector';
import { openModalChangeName } from '@redux/user/user-slice';
import ButtonExit from '@component/buttonExit';
import './headerNav.scss';

const HeaderNav = () => {
    const userName = useSelector(getName);
    const dispatch = useDispatch();

    const onClickName = () => {
        dispatch(openModalChangeName());
    };

    return (
        <ul className="header_nav__list">
            <li className="header_nav__item header_nav_item__click">
                <span className="header_nav__text" onClick={onClickName}>
                    {userName}
                </span>
            </li>
            <li className="header_nav__item">
                <ButtonExit />
            </li>
        </ul>
    );
};

export default HeaderNav;
