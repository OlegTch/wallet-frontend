import './homeTabItemTabletAndDesktop.scss';
import moment from 'moment';

const homeTabItemTabletAndDesktop = ({ operations }) => {
    return (
        <>
            <li className="homeTabTabletAndDesktop" key={0}>
                <h3>Дата</h3>
                <h3>Тип</h3>
                <h3>Категорія</h3>
                <h3>Коментар</h3>
                <h3>Сума</h3>
                <h3>Баланс</h3>
            </li>
            {operations.map(
                ({ id, income, date, category, comment, sum, balance }) => {
                    return (
                        <li key={id} className="homeTabItemTabletAndDesktop">
                            <p>{moment(date).format('DD.MM.YY')}</p>
                            <p>{income ? '+' : '-'}</p>
                            <p>{category}</p>
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
                },
            )}
        </>
    );
};

export default homeTabItemTabletAndDesktop;
