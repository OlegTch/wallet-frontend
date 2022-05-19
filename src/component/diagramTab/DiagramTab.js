import { useSelector } from 'react-redux';
import {
    getCategoryDebet,
    getCategoryCredit,
} from '../../redux/categories/categories-selector';
import { getStatistic } from '../../redux/statistic/statistic-selector';
import { getBalance } from '../../redux/user/user-selector';

import './diagramTab.scss';
import { ChartDoughnut } from '@component/chartDoughnut';
import { DatePicker } from '@component/datePicker';
import { Table } from '@component/table';

const rgb = [
    { id: 1, rgb: 'rgb(255, 207, 87)' },
    { id: 2, rgb: 'rgb(255, 216, 208)' },
    { id: 3, rgb: 'rgb(253, 148, 152)' },
    { id: 4, rgb: 'rgb(197, 186, 255)' },
    { id: 5, rgb: 'rgb(110, 120, 232)' },
    { id: 6, rgb: 'rgb(74, 86, 226)' },
    { id: 7, rgb: 'rgb(129, 225, 255)' },
    { id: 8, rgb: 'rgb(36, 204, 167)' },
    { id: 9, rgb: 'rgb(0, 173, 132)' },
];

export function DiagramTab() {
    // const isCategories = useSelector(isCategoriesFull);
    // const statistic = useSelector(updateStatistic);
    const balance = useSelector(getBalance);
    useSelector(getCategoryCredit);
    const statisticCredit = useSelector(getStatistic);
    useSelector(getCategoryDebet); //income
    const statisticDebet = useSelector(getStatistic);
    console.log(statisticCredit);
    console.log(statisticDebet);
    const transformData = num => {
        return num
            ? num
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            : null;
    };

    const getSum = arr => {
        return arr.reduce((acc, el) => acc + el.sum, 0);
    };

    const getTotal = () => {
        const expense = getSum(statisticCredit);
        const income = getSum(statisticDebet);
        return { expense, income };
    };

    // Вибір кольору
    const color = rgb.map(el => el.rgb);

    return (
        <div className="diagramTab-section">
            <ChartDoughnut
                category={statisticCredit}
                // statistic={statisticCredit}
                balance={transformData(balance)}
                color={color}
            />
            <div className="diagramTab-container">
                <DatePicker />
                <Table
                    category={statisticCredit}
                    color={color}
                    total={getTotal()}
                />
            </div>
        </div>
    );
}
