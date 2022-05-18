import './table.scss';

export function Table({ category, color, total }) {
    const transformData = num => {
        return num
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <div className="diagramTab-table">
            <div className="tableHeader">
                <p>Категорія</p>
                <p>Сума</p>
            </div>

            <div className="tableBody">
                <ul>
                    {category.map(({ category, sum }, i) => (
                        <li className="categoryItem" key={category}>
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
                            Витрати:
                            <span className="expense">
                                {transformData(total.expense)}
                            </span>
                        </p>
                    </li>
                    <li className="tableFooterItem">
                        <p className="row">
                            Доходи:
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
