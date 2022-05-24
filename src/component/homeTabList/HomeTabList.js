import Media from 'react-media';

import HomeTabItemMobile from '@component/homeTabItemMobile';
import HomeTabItemTabletAndDesktop from '@component/homeTabItemTabletAndDesktop';
import { globalMedia } from '@data';
import SpinnerLoader from '@component/spinnerLoader';
import Cat from '@component/cat';
import './HomeTabList.scss';
import {
    isLoading,
    isSaveModalDateStatic,
} from '@redux/finance/finance-selector';
import { useSelector } from 'react-redux';

const HomeTabList = ({ operations }) => {
    const isLoad = useSelector(isLoading);
    const isSave = useSelector(isSaveModalDateStatic);
    console.log('Is loading transaction', isLoad, isSave);
    console.log(operations);
    return (
        <Media queries={globalMedia}>
            {matches => {
                return matches.small ? (
                    <>
                        {(isLoad || isSave) && <SpinnerLoader />}
                        {!isLoad && !isSave && operations.length > 0 ? (
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
                            <>{!isLoad && <Cat />}</>
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
                                {(isLoad || isSave) && <SpinnerLoader />}
                                {!isLoad &&
                                    !isSave &&
                                    (operations.length > 0 ? (
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
                                    ))}
                            </>
                        }
                    </>
                );
            }}
        </Media>
    );
};

export default HomeTabList;
