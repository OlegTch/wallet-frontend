import { useSelector } from 'react-redux';
import './balans.scss';
import { getBalance } from '@redux/finance/finance-selector';
import i18n from '../../services/lang';

export const Balans = () => {
    const balans = useSelector(getBalance);

    const makeMoney = n => {
        return parseFloat(n)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
    };

    return (
        <div className="balans">
            <p className="balans__title">{i18n.t('balance')}</p>
            {/* <p className="balans__title">Ваш баланс</p> */}
            <p className="balans__order">&#8372; {makeMoney(balans)}</p>
        </div>
    );
};
