import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DiagramTab } from '@component/diagramTab';
// import { getFinanceOpertaion } from '@redux/finance/finance-operation';
// import { isCategoriesFull } from '../../redux/categories/categories-selector';
// import { categoriesOperation } from '../../redux/categories/categories-operation';
import { statisticOperation } from '../../redux/statistic/statistic-operation';
import {
    isLoadingStatistic,
    isErrorStatistic,
    getStatistic,
} from '../../redux/statistic/statistic-selector';
import { toast } from 'react-toastify';

//Поточна дата
// import moment from 'moment';
// import 'moment/locale/uk';
// moment.locale('uk')

const thisMonth = new Date().getMonth();
const thisYear = new Date().getFullYear();

export const Statistic = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingStatistic);
    const error = useSelector(isErrorStatistic);
    const statistic = useSelector(getStatistic);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    useEffect(() => {
        // dispatch(getFinanceOpertaion.getOperations());
        // Запит статистики за поточний період

        dispatch(
            statisticOperation.getStatistic({
                month: thisMonth,
                year: thisYear,
            }),
        );
    }, []);

    return !isLoading ? (
        <>
            <h1 className="statistic-header__main">Статистика</h1>
            <DiagramTab statistic={statistic} />
        </>
    ) : (
        <h1>Загрузка...</h1>
    );
};
