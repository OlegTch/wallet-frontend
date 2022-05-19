import './HomeTabList.scss';
import Media from 'react-media';
import HomeTabItemMobile from '@component/homeTabItemMobile';
import HomeTabItemTabletAndDesktop from '@component/homeTabItemTabletAndDesktop';
import { globalMedia } from '@data';

const HomeTabList = ({ operations }) => {
    console.log('===========>>>>>>>>>>>', operations);

    return (
        <Media queries={globalMedia}>
            {matches => {
                return matches.small ? (
                    operations.map(operation => {
                        return (
                            <ul className="homeTabList">
                                <HomeTabItemMobile
                                    operation={operation}
                                    key={operation._id}
                                />
                                );
                            </ul>
                        );
                    })
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
                        {operations.map(operation => {
                            return (
                                <>
                                    <HomeTabItemTabletAndDesktop
                                        operation={operation}
                                        index
                                        key={operation._id}
                                    />
                                </>
                            );
                        })}
                    </ul>
                );
            }}
        </Media>
    );
};

export default HomeTabList;
