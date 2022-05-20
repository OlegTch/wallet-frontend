import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DiagramTab } from '@component/diagramTab';
// import { statisticOperation } from '../../redux/statistic/statistic-operation';
import {
    isLoadingStatistic,
    isErrorStatistic,
    getStatistic,
} from '../../redux/statistic/statistic-selector';
import { toast } from 'react-toastify';

//Поточна дата

// const thisMonth = new Date().getMonth();  // в компоненті DatePicker
// const thisYear = new Date().getFullYear();

const Statistic = () => {
    // const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingStatistic);
    const error = useSelector(isErrorStatistic);
    const statistic = useSelector(getStatistic);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    // useEffect(() => {
    //     // Запит статистики за поточний період

    //     dispatch(
    //         statisticOperation.getStatistic({   // dispatch в компоненті DatePicker
    //             month: thisMonth,
    //             year: thisYear,
    //         }),
    //     );
    // }, []);

    return (
        <>
            <div className="statistic-section">
                <h1 className="statistic-header__main">Статистика</h1>
                <DiagramTab/>
            </div>
            
        </>)
};
export default Statistic;
