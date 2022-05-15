import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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

export function ChartDoughnut({ category, balance, color}) {
  const data = {
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
  
  return <>
    <h2 className='diagramTab-header'>Статистика</h2>
    <div className='wrapper-chart'>
      <div className='balance'>&#8372; {" " + balance} </div>
      <Doughnut data={data} options={options}/>
    </div>
    
  </>
}
