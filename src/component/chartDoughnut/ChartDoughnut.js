import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import Media from 'react-media';

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

export function ChartDoughnut({ category, balance, color, statistic}) {
  const data = {
  // labels: category.category.map(el=>el.name),
  labels: category,  
  datasets: [
    {
      label: '# of Votes',
      // data: category.category.map(el=>el.value),
      // data: statistic.map(el => el.sum),  //  статистика за місяць та рік по curentUser 
      data: statistic.map(el=>el.sum),  //  статистика за місяць та рік по curentUser 
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
    },
  ],
  };
  
  return <div>
    {/* <Media query='(max-width:1279px)'
      render={() => <h2 className='diagramTab-header'>Статистика</h2>} /> */}
    <h2 className='diagramTab-header'>Статистика</h2>
    <div className='wrapper-chart'>
      <div className='balance'>&#8372; {" " + balance} </div>
      <Doughnut data={data} options={options}/>
    </div>
    
  </div>
}
