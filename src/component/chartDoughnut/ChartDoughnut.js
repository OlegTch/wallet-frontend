import { useSelector } from 'react-redux';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getStatistic } from '../../redux/statistic/statistic-selector';

import './chartDoughnut.scss';

ChartJS.register(ArcElement, Tooltip, Legend );

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
    plugins: {
      legend: {
        display: false,
        },
    }
}

export function ChartDoughnut({ category, balance, color, }) {
  
  const isStat = useSelector(getStatistic);

  const data = () => {
      if (isStat.length === 0) {
    
        return {
          // labels: ['No statistic'],
      datasets: [
        {
          // label: '# of Votes',
          data: [1,1,2,2,3,3,4 ],  
          backgroundColor: ["#f5f7fa", "#ebeff5","#dde3ed", "#c8d1e0", "#afbacc", "#8e99ab", "#707a8a"],
          borderColor: ["#f5f7fa", "#ebeff5","#dde3ed", "#c8d1e0", "#afbacc", "#8e99ab", "#707a8a"],
          borderWidth: 1,
        },
      ],}
    }

    return {
  labels: category.map(el=>el.name),  
  datasets: [
    {
      label: '# of Votes',
      data: category.map(el=>el.sum),  //  статистика за місяць та рік по curentUser 
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
    },
  ],
  };

  }
  
  return <div>
    <h2 className='diagramTab-header'>Статистика</h2>
    <div className='wrapper-chart'>
      <div className='balance'>&#8372; {" " + balance} </div>
      <Doughnut data={data()} options={options}/>
    </div>
    
  </div>
}
