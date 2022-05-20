import { useTranslation } from 'react-i18next';
import './table.scss';

export function Table({ category, color, total }) {
    const { t } = useTranslation();
    const transformData = num => {
        return (
            num
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || null
        ); //-------
    };

    return (
        <div className="diagramTab-table">
            <div className="tableHeader">
                <p>{t('category')}</p>
                <p>{t('summ')}</p>
            </div>

            <div className="tableBody">
                <ul>
                    {category.map(({ category, sum, id }, i) => (
                        <li className="categoryItem" key={id}>
                            <div
                                style={{
                                    backgroundColor: color[i],
                                    minWidth: 24 + 'px',
                                    minHeight: 24 + 'px',
                                }}
                            ></div>
                            <div className="wrapper">
                                <p className="categoryName">{category}</p>
                                <p className="sum">{transformData(sum)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="tableFooter">
                    <li className="tableFooterItem">
                        <p className="row">
                            {t('expences')}
                            <span className="expense">
                                {transformData(total.expense)}
                            </span>
                        </p>
                    </li>
                    <li className="tableFooterItem">
                        <p className="row">
                            {t('incomes')}
                            <span className="income">
                                {transformData(total.income)}
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
