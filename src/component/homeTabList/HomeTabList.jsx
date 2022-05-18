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
                    <HomeTabItemMobile operations={operations} />
                ) : (
                    <HomeTabItemTabletAndDesktop operations={operations} />
                );
            }}
        </Media>
    );
};

export default HomeTabList;
