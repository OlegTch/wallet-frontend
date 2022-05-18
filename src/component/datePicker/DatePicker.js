import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import './datePicker.scss';
import { customStyles } from './customStyles';
import sprite from '../../assets/sprite.svg';
import { statisticOperation } from '../../redux/statistic/statistic-operation';
import { categoriesOperation } from '../../redux/categories/categories-operation';
import { isLoadingStatistic } from '../../redux/statistic/statistic-selector';

import moment from 'moment';
import 'moment/locale/uk';
moment.locale('uk');

const thisMonth = new Date().getMonth() + 1;

const monthsList = moment(new Date(), 'MMMM', 'uk')._locale._months.standalone;
const monthsOptions = monthsList.map(el => ({ value: el, label: el }));

const thisYear = new Date().getFullYear();
const yearsList = Array.from(new Array(12), (val, index) => thisYear - index);

const yearsOptions = yearsList.map(el => ({ value: el, label: el }));

const DropdownIndicator = props => {
    // Додає кастомну svg до селекту
    return (
        <components.DropdownIndicator {...props}>
            <svg className="icon icon-vector" width="20" height="11">
                <use href={`${sprite}#icon-vector`}></use>
            </svg>
        </components.DropdownIndicator>
    );
};

export function DatePicker() {
    const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch();
    const { isLoading } = isLoadingStatistic;

    useEffect(() => {
        dispatch(categoriesOperation.getCategories());
        // Запит списку статистики по категоріям за обраний період
        if (selectedOption !== null) {
            dispatch(statisticOperation.getStatistic(selectedOption));
        }
    }, [dispatch, selectedOption]);

    const handleChange = (name, value) => {
        if (!selectedOption?.month ?? null) {
            setSelectedOption(prev => ({ ...prev, month: thisMonth }));
        }
        if (!selectedOption?.year ?? null) {
            setSelectedOption(prev => ({ ...prev, year: thisYear }));
        }

        if (name === 'month') {
            const num = monthsList.findIndex(e => e === value) + 1;
            console.log(num);
            setSelectedOption(prev => ({ ...prev, [name]: num }));
        }

        if (name === 'year') {
            setSelectedOption(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="containerDatePicker">
            <Select
                components={{ DropdownIndicator }}
                defaultValue={selectedOption}
                onChange={option => {
                    handleChange('month', option.value);
                }}
                options={monthsOptions}
                placeholder="Місяць"
                isSearchable={false}
                // isDisabled={!isLoading}
                styles={customStyles}
            />

            <Select
                components={{ DropdownIndicator }}
                defaultValue={selectedOption}
                onChange={option => {
                    handleChange('year', option.value);
                }}
                options={yearsOptions}
                placeholder="Рік"
                isSearchable={false}
                // isDisabled={!isLoading}
                styles={customStyles}
            />
        </div>
    );
}
