import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getStatistic } from '@redux/statistic/statistic-selector';
import { getBalance } from '@redux/finance/finance-selector';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import { ChartDoughnut } from '@component/chartDoughnut';
import { DatePicker } from '@component/datePicker';
import { Table } from '@component/table';
import './diagramTab.scss';

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
    const balance = useSelector(getBalance);
    const statistic = useSelector(getStatistic);

    useEffect(() => {
        dispatch(getFinanceOpertaion.getOperations());
    }, [dispatch]);

    const statisticCredit = statistic.expense;

    const transformData = num => {
        return (
            num
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || null
        );
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
                isEmpty={
                    statistic.totalExpense === 0
                        ? 
                          true
                        : false
                }
                total={{
                    expense: statistic.totalExpense,
                }}
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
                />
            </div>
        </div>
    );
}
