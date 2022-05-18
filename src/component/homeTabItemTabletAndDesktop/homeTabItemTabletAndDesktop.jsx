import './homeTabItemTabletAndDesktop.scss';
import moment from 'moment';

const homeTabItemTabletAndDesktop = ({
    operation: {
        category: { name },
        income,
        sum,
        balance,
        comment,
        date,
    },
}) => {
    return (
        <li className="homeTabItemTabletAndDesktop">
            <p>{moment(date).format('DD.MM.YY')}</p>
            <p>{income ? '+' : '-'}</p>
            <p>{name}</p>
            <p>{comment}</p>
            <p
                className={
                    income
                        ? 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--green'
                        : 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--red'
                }
            >
                {sum}
            </p>
            <p>{balance}</p>
        </li>
    );
};

export default homeTabItemTabletAndDesktop;
