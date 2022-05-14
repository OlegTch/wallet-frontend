import './HomeTabList.scss';
import moment from 'moment';

const HomeTabList = ({ operations }) => {
    console.log('MY LOG---------------------------------------', operations);
    return (
        <ul className="homeTabList">
            {operations.map(
                ({ category, income, sum, balance, comment, date, id }) => {
                    return (
                        <li
                            key={id}
                            className={
                                income
                                    ? 'homeTabList-item--green'
                                    : 'homeTabList-item--red'
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
                                Категория:<span>{category}</span>
                            </p>
                            <p>
                                Комментарий:<span>{comment}</span>
                            </p>
                            <p>
                                Сумма:
                                <span className="homeTabList-result">
                                    {sum}
                                </span>
                            </p>
                            <p>
                                Баланс:<span>{balance}</span>
                            </p>
                        </li>
                    );
                },
            )}
        </ul>
    );
};

export default HomeTabList;
