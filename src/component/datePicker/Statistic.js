import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DiagramTab } from "@component/diagramTab";
// import { isCategoriesFull } from '../../redux/categories/categories-selector';
// import { categoriesOperation } from '../../redux/categories/categories-operation';
import { statisticOperation } from '../../redux/statistic/statistic-operation';
import { updateStatistic } from '../../redux/statistic/statistic-selector';


export const Statistic = () => {
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(updateStatistic);

  useEffect(() => {
    // Запит статистики за поточний період
        dispatch(statisticOperation.getStatistic())
  }, [dispatch])

  return isLoading ? (<>
    <h1 className="statistic-header__main">Статистика</h1>
    <DiagramTab />
  </>) : (<h1>Загрузка...</h1>)
}