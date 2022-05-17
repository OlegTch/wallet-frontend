import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import Media from 'react-media';
import { DiagramTab } from '@component/diagramTab';
import { statisticOperation } from '../../redux/statistic/statistic-operation';

// Поточна дата
import moment from 'moment';
import 'moment/locale/uk';
moment.locale('uk');

const thisMonth = moment(new Date()).format('mm');
const thisYear = new Date().getFullYear();

export const Statistic = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Запит статистики за поточний період
        dispatch(
            statisticOperation.getStatistic({
                month: thisMonth,
                year: thisYear,
            }),
        );
    }, [dispatch]);

    return (
        <div className="statistic-section">
            {/* <Media query='(min-width:1280px)'
      render={() => <h2 className='diagramTab-header'>Статистика</h2>} /> */}
            <h1 className="statistic-header__main">Статистика</h1>
            <DiagramTab />
        </div>
    );
};
