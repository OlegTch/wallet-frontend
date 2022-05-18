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
        <>
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
        </>
    );
};

export default homeTabItemTabletAndDesktop;
