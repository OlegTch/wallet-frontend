import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import './datePicker.scss';
import { customStyles } from './customStyles';
import sprite from '../../assets/sprite.svg';
import { statisticOperation } from '../../redux/statistic/statistic-operation';
import { categoriesOperation } from '../../redux/categories/categories-operation';

import moment from 'moment';
import 'moment/locale/uk';
moment.locale('uk')

const thisMonth = moment(new Date()).format('MMMM');

const monthsList = moment(new Date(), "MMMM", 'uk')._locale._months.standalone;
const monthsOptions = monthsList.map((el) => ({ value: el, label: el }));

const thisYear = (new Date()).getFullYear();
const yearsList = Array.from(new Array(12), (val, index) => thisYear - index);

const yearsOptions = yearsList.map((el) => ({ value: el, label: el }));

const DropdownIndicator = props => {
  // Додає кастомну svg до селекту
  return (
    <components.DropdownIndicator {...props}>
      <svg className="icon icon-vector" width='20' height='11'>
        <use href={`${sprite}#icon-vector`}></use>
      </svg>
    </components.DropdownIndicator>
  )
};

export function DatePicker() {
  // const [selectedOption, setSelectedOption] = useState({ month: thisMonth, year: thisYear });
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesOperation.getCategories())
    // Запит списку статистики по категоріям за обраний період
    if (selectedOption !== null) {
      dispatch(statisticOperation.getStatistic(selectedOption))
    }
    
  }, [dispatch, selectedOption])

  
  const handleChange = (name, value) => {
    
    if (!selectedOption?.month ?? null) {
      setSelectedOption((prev) => ({ ...prev, month: thisMonth }))
    }
    if (!selectedOption?.year ?? null) {
      setSelectedOption((prev) => ({ ...prev, year: thisYear }))
    }
    setSelectedOption((prev) => ({ ...prev, [name]: value }))
  }
  

  return (
    <div className='containerDatePicker'>
      <Select
        components={{DropdownIndicator}}
        defaultValue={selectedOption}
          // defaultValue={monthsOptions.find((month)=>month.value===selectedOption?.month)}
          // onChange={setSelectedOption}
        onChange={(option) => { handleChange("month", option.value) }}
        options={monthsOptions}
        placeholder='Місяць'
          isSearchable={false}
        styles={customStyles}
      />
      
      <Select
        components={{DropdownIndicator}}
        defaultValue={selectedOption}
          // defaultValue={yearsOptions.find((year)=>year.value===selectedOption.year)}
          // onChange={setSelectedOption}
        onChange={(option) => { handleChange("year", option.value) }}
        options={yearsOptions}
        placeholder='Рік'
          isSearchable={false}
        styles={customStyles}
      />
    </div>
  );
}
