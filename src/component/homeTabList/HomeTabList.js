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
                    <>
                        {
                            <>
                                <table className="tab-stick">
                                    <thead>
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                </table>
                                {operations.length > 0 ? (
                                    <div className="block_table">
                                        <table idth="100%">
                                            {operations.length > 0 && (
                                                <tbody>
                                                    {operations.map(el => (
                                                        <HomeTabItemTabletAndDesktop
                                                            operation={el}
                                                            key={el._id}
                                                        />
                                                    ))}
                                                </tbody>
                                            )}
                                        </table>
                                    </div>
                                ) : (
                                    <Cat nameClass="big" />
                                )}
                            </>
                        }
                    </>
                );
            }}
        </Media>
    );
};

export default HomeTabList;
