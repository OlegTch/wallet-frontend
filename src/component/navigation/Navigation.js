import Media from 'react-media';

import { navList, globalMedia } from '@data';
import ItemNav from '@component/itemNav';
import './navigation.scss';

const Navigation = () => {
    return (
        <ul className="nav_list">
            {navList.map((el, idx) => {
                return (
                    <Media queries={globalMedia} key={idx}>
                        {matches => (
                            <>
                                {matches.medium && el.text === '' ? null : (
                                    <li className="nav_list__item" key={idx}>
                                        <ItemNav
                                            icon={el.icon}
                                            text={el.text}
                                            linkTo={el.linkTo}
                                        />
                                    </li>
                                )}
                            </>
                        )}
                    </Media>
                );
            })}
        </ul>
    );
};

export default Navigation;
