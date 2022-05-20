import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import './datePicker.scss';
import { customStyles } from './customStyles';
import sprite from '../../assets/sprite.svg';
import { statisticOperation } from '../../redux/statistic/statistic-operation';

import moment from 'moment';
import 'moment/locale/uk';
moment.locale('uk');

const thisMonth = new Date().getMonth();

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
    const [selectedOption, setSelectedOption] = useState({
        month: thisMonth,
        year: thisYear,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        // Запит списку статистики по категоріям за обраний період
        dispatch(statisticOperation.getStatistic(selectedOption));
    }, [dispatch, selectedOption]);

    const handleChange = (name, value) => {

        if (name === 'month') {
            const num = monthsList.findIndex(e => e === value);
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
                onChange={option => {
                    handleChange('month', option.value);
                }}
                options={monthsOptions}
                placeholder="Місяць"
                isSearchable={false}
                styles={customStyles}
                // menuPlacement='top'
            />

            <Select
                components={{ DropdownIndicator }}
                onChange={option => {
                    handleChange('year', option.value);
                }}
                options={yearsOptions}
                placeholder="Рік"
                isSearchable={false}
                styles={customStyles}
                // menuPlacement='top'
            />
        </div>
    );
}
