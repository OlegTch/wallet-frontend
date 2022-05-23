import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DiagramTab } from '@component/diagramTab';
import {
    isLoadingStatistic,
    isErrorStatistic,
    getStatistic,
} from '@redux/statistic/statistic-selector';

//Поточна дата

const Statistic = () => {
    const isLoading = useSelector(isLoadingStatistic);
    const error = useSelector(isErrorStatistic);
    const statistic = useSelector(getStatistic);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    return (
        <>
            <div className="statistic-section">
                <h1 className="statistic-header__main">Статистика</h1>
                <DiagramTab />
            </div>
        </>
    );
};
export default Statistic;
