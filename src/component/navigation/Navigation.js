import { navList } from '@data/navigation';
import { ItemNav } from '@shared';

export const Navigation = () => {
    return (
        <ul className="nav_list">
            {navList.map((el, idx) => {
                return window.screen.width >= 768 && el.text === '' ? null : (
                    <li className="nav_list__item" key={idx}>
                        <ItemNav
                            icon={el.icon}
                            text={el.text}
                            linkTo={el.linkTo}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
