import { NavLink } from 'react-router-dom';
import Media from 'react-media';

import { globalMedia } from '@data';
import sprite from '@assets/sprite.svg';
import './itemNav.scss';

const ItemNav = ({ icon, text, linkTo }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? 'nav_item active' : 'nav_item'
            }
            to={linkTo}
        >
            <svg className="nav_item__icon">
                <use href={`${sprite}#${icon}`}></use>
            </svg>
            <Media queries={globalMedia}>
                {matches => (
                    <>
                        {matches.medium && (
                            <p className="nav_item__text">{text}</p>
                        )}
                    </>
                )}
            </Media>
        </NavLink>
    );
};

export default ItemNav;
