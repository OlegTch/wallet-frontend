import Media from 'react-media';

import HomeTabItemMobile from '@component/homeTabItemMobile';
import HomeTabItemTabletAndDesktop from '@component/homeTabItemTabletAndDesktop';
import { globalMedia } from '@data';
import Cat from '@component/cat';
import './HomeTabList.scss';

const HomeTabList = ({ operations }) => {
    return (
        <Media queries={globalMedia}>
            {matches => {
                return matches.small ? (
                    <>
                        {operations.length > 0 ? (
                            <ul className="homeTabList">
                                {operations.map(el => {
                                    // console.log(el);
                                    return (
                                        <li
                                            className={
                                                el.income
                                                    ? 'homeTabItem homeTabItem--green'
                                                    : 'homeTabItem homeTabItem--red'
                                            }
                                            key={el._id}
                                        >
                                            <HomeTabItemMobile operation={el} />
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <Cat />
                        )}
                    </>
                ) : (
                    <ul className="homeTabList">
                        <li
                            className="homeTabTabletAndDesktop"
                            key={'HomeTabItem'}
                        >
                            <h3>Дата</h3>
                            <h3>Тип</h3>
                            <h3>Категорія</h3>
                            <h3>Коментар</h3>
                            <h3>Сума</h3>
                            <h3>Баланс</h3>
                        </li>
                        {operations.length > 0 ? (
                            operations.map(el => (
                                <li
                                    className="homeTabItemTabletAndDesktop"
                                    key={el._id}
                                >
                                    <HomeTabItemTabletAndDesktop
                                        operation={el}
                                    />
                                </li>
                            ))
                        ) : (
                            <Cat />
                        )}
                    </ul>
                );
            }}
        </Media>
    );
};

export default HomeTabList;
