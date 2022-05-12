import { navList } from '@data/navigation';
import { ItemNav } from '@shared';

export const Navigation = () => {
    return (
        <ul className="nav_list">
            {navList.map((el, idx) => {
                return window.screen.width >= 768 && el.text === '' ? null : (
                    <ItemNav
                        key={idx}
                        icon={el.icon}
                        text={el.text}
                        linkTo={el.linkTo}
                    />
                );
            })}
        </ul>
    );
};
