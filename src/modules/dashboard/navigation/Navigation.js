import { navList } from '@data/navigation';
import { ItemNav } from '@common';

export const Navigation = () => {
    console.log('Navigation');
    console.log(navList);
    return (
        <ul className="nav_list">
            {navList.map((el, idx) => {
                console.log(el);
                console.log(window.screen.width);
                if (window.screen.width >= 768 && el.text === '') {
                    return null;
                }
                console.log(el.icon);
                return (
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
