import './HomeTabList.scss';
import Media from 'react-media';
import HomeTabItemMobile from '@component/homeTabItemMobile';
import HomeTabItemTabletAndDesktop from '@component/homeTabItemTabletAndDesktop';

const HomeTabList = ({ operations }) => {
    console.log('===========>>>>>>>>>>>', operations);

    return (
        <ul className="homeTabList">
            <Media
                queries={{
                    small: '(min-width: 320px) and (max-width: 767px)',
                    medium: '(min-width: 768px)',
                }}
            >
                {matches => {
                    switch (true) {
                        case matches.small:
                            return operations.map(operation => {
                                return (
                                    <HomeTabItemMobile
                                        operation={operation}
                                        key={operation._id}
                                    />
                                );
                            });
                        case matches.medium:
                            return (
                                <>
                                    <li
                                        className="homeTabTabletAndDesktop"
                                        key={0}
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
                                            <li
                                                key={operation._id}
                                                className="homeTabItemTabletAndDesktop"
                                            >
                                                <HomeTabItemTabletAndDesktop
                                                    operation={operation}
                                                    index
                                                    // key={operation._id}
                                                />
                                            </li>
                                        );
                                    })}
                                </>
                            );
                        default:
                            console.log('Error in switch handleTabList');
                            return <h1>Ууупс... Сталась помилка</h1>;
                    }
                }}
            </Media>
        </ul>
    );
};

export default HomeTabList;
