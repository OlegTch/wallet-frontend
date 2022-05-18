import './homeTabItemMobile.scss';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';

const homeTabItemMobile = ({
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
        <li
            className={
                income
                    ? 'homeTabItem homeTabItem--green'
                    : 'homeTabItem homeTabItem--red'
            }
        >
            <p>
                Дата:
                <span>{moment(datetime).format('DD.MM.YY')}</span>
            </p>
            <p>
                Тип:<span>{income ? '+' : '-'}</span>
            </p>
            <p>
                Категорія:
                <span>
                    <EllipsisText text={name} length={13} />
                </span>
            </p>
            <p>
                Коментар:
                <span>
                    <EllipsisText
                        text={comment === null || '' ? '-' : comment}
                        length={13}
                    />
                    {comment}
                </span>
            </p>
            <p>
                Сума:
                <span className="homeTabItemResult">
                    <EllipsisText text={String(sum)} length={13} />
                </span>
            </p>
            <p>
                Баланс:
                <span>
                    <EllipsisText text={String(balance)} length={13} />
                </span>
            </p>
        </li>
    );
};

export default homeTabItemMobile;
