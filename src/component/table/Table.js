import './table.scss';

export function Table({ category, color,}) {
    
    return <div className="diagramTab-table">
        <div className="tableHeader">
            <p>Категорія</p>
            <p>Сума</p>
        </div>

        <div className="tableBody">
            <ul>
                {category.map(({ id, name, sum }, i) => (
                
                    <li className="categoryItem" key={id}>
                        <div style={{ backgroundColor: color[i], minWidth: 24 + 'px', minHeight: 24 + 'px', }}></div>
                        <div className="wrapper">
                            <p className="categoryName" >{name}</p>
                            <p className="sum">{sum}</p>
                        </div>  
                    </li>
                ))}
            </ul>
            <ul className="tableFooter">
                <li className="tableFooterItem">
                    <p className="row">Витрати:<span className="expense">{category.income}</span></p>
                </li>
                <li className="tableFooterItem">
                    <p className="row">Доходи:<span className="income">{category.expense}</span></p>
                </li>
            </ul>
        </div>

    </div>
}
