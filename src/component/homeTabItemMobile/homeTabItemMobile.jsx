import './homeTabItemMobile.scss';
import moment from 'moment';

const homeTabItemMobile = ({
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
        <li
            className={
                income
                    ? 'homeTabItem homeTabItem--green'
                    : 'homeTabItem homeTabItem--red'
            }
        >
            <p>
                Дата:
                <span>{moment(date).format('DD.MM.YY')}</span>
            </p>
            <p>
                Тип:<span>{income ? '+' : '-'}</span>
            </p>
            <p>
                Категория:<span>{name}</span>
            </p>
            <p>
                Комментарий:<span>{comment}</span>
            </p>
            <p>
                Сумма:
                <span className="homeTabItemResult">{sum}</span>
            </p>
            <p>
                Баланс:<span>{balance}</span>
            </p>
        </li>
    );
};

export default homeTabItemMobile;
