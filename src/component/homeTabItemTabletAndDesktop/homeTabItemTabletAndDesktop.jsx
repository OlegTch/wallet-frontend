import './homeTabItemTabletAndDesktop.scss';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';

const homeTabItemTabletAndDesktop = ({ operations }) => {
    return (
        <ul className="homeTabList">
            <li className="homeTabTabletAndDesktop" key={'HomeTabItem'}>
                <h3>Дата</h3>
                <h3>Тип</h3>
                <h3>Категорія</h3>
                <h3>Коментар</h3>
                <h3>Сума</h3>
                <h3>Баланс</h3>
            </li>
            {operations.map(
                ({
                    category: { name },
                    income,
                    sum,
                    balance,
                    comment,
                    datetime,
                }) => {
                    return (
                        <li className="homeTabItemTabletAndDesktop">
                            <p>{moment(datetime).format('DD.MM.YY')}</p>
                            <p>{income ? '+' : '-'}</p>
                            <p>
                                <EllipsisText
                                    text={name ? name : ''}
                                    length={10}
                                />
                            </p>
                            <p>
                                <EllipsisText
                                    text={
                                        comment === null || '' ? '-' : comment
                                    }
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
                                <EllipsisText
                                    text={String(balance)}
                                    length={8}
                                />
                            </p>
                        </li>
                    );
                },
            )}
        </ul>
    );
};

export default homeTabItemTabletAndDesktop;
