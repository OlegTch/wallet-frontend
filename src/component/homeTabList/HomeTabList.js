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
                    <table className="homeTabList">
                        <tr
                            className="homeTabTabletAndDesktop"
                            key={'HomeTabItem'}
                        >
                            <th>Дата</th>
                            <th>Тип</th>
                            <th>Категорія</th>
                            <th>Коментар</th>
                            <th>Сума</th>
                            <th>Баланс</th>
                        </tr>
                        {operations.length > 0 ? (
                            operations.map(el => (
                                <tr
                                    className="homeTabItemTabletAndDesktop"
                                    key={el._id}
                                >
                                    <HomeTabItemTabletAndDesktop
                                        operation={el}
                                    />
                                </tr>
                            ))
                        ) : (
                            <Cat />
                        )}
                    </table>
                );
            }}
        </Media>
    );
};

export default HomeTabList;
