import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { getCategoryDebet, getCategoryCredit } from '../../redux/categories/categories-selector';
import { getStatistic } from '../../redux/statistic/statistic-selector';
import { statisticOperation } from '../../redux/statistic/statistic-operation';
import { getBalance } from '@redux/finance/finance-selector';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';

import './diagramTab.scss';
import { ChartDoughnut } from '@component/chartDoughnut';
import { DatePicker } from '@component/datePicker';
import { Table } from '@component/table';

const rgb = [
    '#ffcf57',
    '#ffd8d0',
    '#fd9498',
    '#c5baff',
    '#6e78e8',
    '#4a56e2',
    '#81e1ff',
    '#24cca7',
    '#00ad84',
];

export function DiagramTab() {
    const dispatch = useDispatch();
    // const isCategories = useSelector(isCategoriesFull);
    // const statistic = useSelector(updateStatistic);
    const balance = useSelector(getBalance);
    // useSelector(getCategoryCredit);
    // const statisticCredit = useSelector(getStatistic);
    // useSelector(getCategoryDebet);                     // -------income
    // const statisticDebet = useSelector(getStatistic);
    const statistic = useSelector(getStatistic);

    useEffect(() => {
        dispatch(getFinanceOpertaion.getOperations());
    }, [dispatch]);

    const getSum = arr => {
        return arr.reduce((acc, el) => acc + el.sum, 0);
    };

    const statisticDebet = statistic.income;
    // console.log(statisticDebet)

    const statisticCredit = statistic.expense;
    // console.log(statisticCredit)

    const getTotal = () => {
        const expense = getSum(statisticCredit);
        const income = getSum(statisticDebet);
        return { expense, income };
    };
    // console.log(getTotal())

    // const allCategoryName = (statisticCredit.map((el) => el.category));
    // console.log(allCategoryName)

    // const filtrCategory= (statisticCredit.reduce((acc, currV) => {
    //     if (acc.indexOf(currV.category)) {
    //         acc.push(currV.category)
    //     }
    //     return acc
    // }, []))
    // console.log(filtrCategory)

    const transformData = num => {
        return (
            num
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || null
        ); //---------
    };

    // Кольори за макетом
    const colorTempl = rgb.map(el => el);

    // генерація випадкового кольору
    const generateColor = () => {
        const num = statisticCredit.map(() => {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
        return num;
    };
    const color = colorTempl.concat(generateColor());

    return (
        <div className="diagramTab-section">
            <ChartDoughnut
                category={statisticCredit}
                balance={transformData(balance)}
                color={color}
            />
            <div className="diagramTab-container">
                <DatePicker />
                <Table
                    category={statisticCredit}
                    color={color}
                    total={{
                        expense: statistic.totalExpense,
                        income: statistic.totalIncome,
                    }}
                    // total={getTotal()}
                />
            </div>
        </div>
    );
}
