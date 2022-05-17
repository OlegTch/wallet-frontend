import './HomeTabList.scss';
import Media from 'react-media';
import HomeTabItemMobile from '@component/homeTabItemMobile';
import HomeTabItemTabletAndDesktop from '@component/homeTabItemTabletAndDesktop';

const HomeTabList = ({ operations }) => {
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
                                        key={operation.id}
                                    />
                                );
                            });
                        case matches.medium:
                            return (
                                <HomeTabItemTabletAndDesktop
                                    operations={operations}
                                />
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
