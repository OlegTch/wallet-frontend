import './homeTabItemTabletAndDesktop.scss';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';

const homeTabItemTabletAndDesktop = ({
    operation: {
        category: { name },
        income,
        sum,
        balance,
        comment,
        datetime,
    },
}) => {
    return (
        <li className="homeTabItemTabletAndDesktop">
            <p>{moment(datetime).format('DD.MM.YY')}</p>
            <p>{income ? '+' : '-'}</p>
            <p>
                <EllipsisText text={name} length={10} />
            </p>
            <p>
                <EllipsisText
                    text={comment === null || '' ? '-' : comment}
                    length={13}
                />
            </p>
            <p
                className={
                    income
                        ? 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--green'
                        : 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--red'
                }
            >
                <EllipsisText text={String(sum)} length={8} />
            </p>
            <p>
                <EllipsisText text={String(balance)} length={8} />
            </p>
        </li>
    );
};

export default homeTabItemTabletAndDesktop;
