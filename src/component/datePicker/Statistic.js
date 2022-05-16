import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DiagramTab } from "@component/diagramTab";
import { isCategoriesFull } from '../../redux/categories/categories-selector';
import { categoriesOperation } from '../../redux/categories/categories-operation';
import { statisticOperation } from '../../redux/statistic/statistic-operation';
import { getStatistic } from '../../redux/statistic/statistic-selector';


export const Statistic = () => {
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(getStatistic);

  useEffect(() => {
    // Запит статистики за поточний період
        dispatch(statisticOperation.getStatistic)
  }, [dispatch])

  return <>
    <h1 className="statistic-header">Statistics/Статистика</h1>
    <DiagramTab />
  </>
}