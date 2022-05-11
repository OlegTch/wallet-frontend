import sprite from '@assets/sprite.svg';
import { NavLink } from 'react-router-dom';

export const ItemNav = ({ icon, text, linkTo }) => {
    return (
        // <NavLink
        //     className="nav_item"
        //     to={linkTo}
        //     style={({ isActive }) => (isActive ? 'active' : undefined)}
        // >
        //     <svg className="nav_item__icon">
        //         <use href={`${sprite}#${icon}`}></use>
        //     </svg>
        //     <p className="nav_item__text">{text}</p>
        // </NavLink>
        <button
            className="nav_item"
            onClick={() => {
                console.log('Link to ' + linkTo);
            }}
        >
            <svg className="nav_item__icon">
                <use href={`${sprite}#${icon}`}></use>
            </svg>
            {window.screen.width >= 768 && (
                <p className="nav_item__text">{text}</p>
            )}
        </button>
    );
};
