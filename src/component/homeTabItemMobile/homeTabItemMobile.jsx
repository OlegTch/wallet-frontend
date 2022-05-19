import './homeTabItemMobile.scss';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';

const homeTabItemMobile = ({ operations }) => {
    return (
        <ul className="homeTabList">
            {operations.map(
                ({
                    category: { name },
                    income,
                    sum,
                    balance,
                    comment,
                    datetime,
                }) => {
                    console.log(comment);
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
                                <span>
                                    {moment(datetime).format('DD.MM.YY')}
                                </span>
                            </p>
                            <p>
                                Тип:<span>{income ? '+' : '-'}</span>
                            </p>
                            <p>
                                Категорія:
                                <EllipsisText text={name} length={13} />
                            </p>
                            <p>
                                Коментар:
                                <span>
                                    <EllipsisText
                                        text={
                                            comment === null || ''
                                                ? '-'
                                                : comment
                                        }
                                        length={13}
                                    />
                                </span>
                            </p>
                            <p>
                                Сума:
                                <span className="homeTabItemResult">
                                    <EllipsisText
                                        text={String(sum)}
                                        length={13}
                                    />
                                </span>
                            </p>
                            <p>
                                Баланс:
                                <span>
                                    <EllipsisText
                                        text={String(balance)}
                                        length={13}
                                    />
                                </span>
                            </p>
                        </li>
                    );
                },
            )}
        </ul>
    );
};

export default homeTabItemMobile;
