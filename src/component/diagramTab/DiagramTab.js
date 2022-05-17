import { useSelector } from 'react-redux';
import { getCategoryDebet } from '../../redux/categories/categories-selector';
import { updateStatistic } from '../../redux/statistic/statistic-selector';
import { getBalance } from '../../redux/user/user-selector';

import './diagramTab.scss';
import { ChartDoughnut } from "@component/chartDoughnut";
import { DatePicker } from "@component/datePicker";
import { Table } from '@component/table';

const total = {                 // Для перевірки, повинна приходити по запиту
    "totalIncome": 22549.24,
    "totalExpense": 27350.00,
}
           

const rgb = [
  { id: 1, rgb: "rgb(255, 207, 87)"},
  {id: 2, rgb:"rgb(255, 216, 208)"},
  {id: 3, rgb:"rgb(253, 148, 152)"},
  {id: 4, rgb:"rgb(197, 186, 255)"},
  {id: 5, rgb:"rgb(110, 120, 232)"},
  {id: 6, rgb:"rgb(74, 86, 226)"},
  {id: 7, rgb:"rgb(129, 225, 255)"},
  {id: 8, rgb:"rgb(36, 204, 167)"},
  {id: 9, rgb:"rgb(0, 173, 132)"},
]
  
export function DiagramTab() {
    // const isCategories = useSelector(isCategoriesFull);
    const statistic = useSelector(updateStatistic);
    const categories = useSelector(getCategoryDebet);
    const balance = useSelector(getBalance);
        
    const transformData = (num) => {
        return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    

    //Фільтрація списку статистика по id категорій
    function filterById(objCategories, objStat) {
        const idDebet = objCategories.map(el => el.id)
        const objById = objStat.filter(el => idDebet.includes(el.category))
        // console.log(objById)  
        return objById
    }

    const nameCategory = categories.map(el => el.name)

  // Вибір кольору
    const color = rgb.map(el=>el.rgb)
    
        return <div className='diagramTab-section'>
            {/* <h2 className='diagramTab-header'>Статистика</h2> */}
            <ChartDoughnut
                category={nameCategory}
                statistic={filterById(categories, statistic)}
                balance={transformData(balance)}
                color={color}
            />
            <div className='diagramTab-container'>
                <DatePicker />
                <Table category={filterById(categories, statistic)} color={color} name={nameCategory} total={total} />
            </div>
            
        </div>
}
