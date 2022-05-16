import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import { getBalance } from '../../redux/user/user-selector';
import {
    getCategoryDebet,
    getCategoryCredit,
} from '@redux/categories/categories-selector';
import { isSaveModalDateStatic } from '@redux/finance/finance-selector';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import { closeModalTransaction } from '@redux/finance/finance-slice';
import 'moment/locale/ru';

import sprite from '@assets/sprite.svg';
import './modalTransaction.scss';
import { alert, defaults } from '@pnotify/core';

// import { validate } from 'indicative/validator';
export const ModalTransaction = () => {
    const [modalTypeTransaction, setModalTypeTransaction] = useState('income');
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState('Регулярный доход');
    const [listActive, setListActive] = useState(false);
    const [summ, setSumm] = useState('');

    defaults.styling = 'material';
    defaults.icons = 'material';
    defaults.delay = 1000;
    const currentBalance = useSelector(getBalance);
    const getDebit = useSelector(getCategoryDebet);
    const getCredit = useSelector(getCategoryCredit);
    const pushDate = useSelector(isSaveModalDateStatic);
    console.log(getDebit);
    console.log(getCredit);
    const dispatch = useDispatch();

    function closeModalItem() {
        dispatch(closeModalTransaction());
    }

    useEffect(() => {
        const backdrop = document.querySelector('#backdrop');

        function clickBackdrop(e) {
            if (e.target === backdrop) {
                closeModalItem();
            }
        }

        function pressEsc(e) {
            if (e.code === 'Escape') {
                closeModalItem();
            }
        }

        document.addEventListener('click', clickBackdrop);
        document.addEventListener('keydown', pressEsc);

        return function cleanup() {
            document.removeEventListener('click', clickBackdrop);
            document.removeEventListener('keydown', pressEsc);
        };
    }, [closeModalItem]);
    useEffect(() => {
        if (pushDate) {
            closeModalItem();
        }
    }, [pushDate]);

    function dateChange(e) {
        setDate(e._d);
    }
    function listOpen() {
        setListActive(!listActive);
    }
    function categoryClick(e) {
        setCategory(e.target.textContent);
        setListActive(!listActive);
    }

    function switchToggle() {
        if (modalTypeTransaction === 'income') {
            return 'toggleIncome';
        }
        return 'toggleIncomeSwitch';
    }

    function switchActiveDebet() {
        if (modalTypeTransaction === 'income') {
            const notActiv = 'switchTypeBalance__text';
            const active = 'switchTypeBalance__text__active';
            return `${notActiv} ${active}`;
        }

        return 'switchTypeBalance__text';
    }
    function switchActive() {
        if (modalTypeTransaction === 'spending') {
            const notActiv = 'switchTypeBalance__text';
            const active = 'switchTypeBalance__text__active';
            return `${notActiv} ${active}`;
        }

        return 'switchTypeBalance__text';
    }

    async function submitHandler(e) {
        e.preventDefault();
        const nextBalance = currentBalance - summ;
        if (
            nextBalance <= 0 &&
            modalTypeTransaction === 'spending' &&
            category !== 'Выберите категорию'
        ) {
            alert({
                text: 'Недостаточно средств',
                hide: true,
                delay: 2000,
                sticker: false,
                closer: true,
                dir1: 'down',
            });
            return;
        }
        if (category === 'Выберите категорию') {
            alert({
                text: 'Пожалуйста выберите категорию',
                hide: true,
                delay: 2000,
                sticker: false,
                closer: true,
                dir1: 'down',
            });
            return;
        }
    }

    function switchClickHandler(e) {
        if (!e.target.checked) {
            setModalTypeTransaction('spending');
            setCategory('Выберите категорию');
            return;
        }
        setModalTypeTransaction('income');
        setCategory('Регулярный доход');
    }
    // випадающий список
    function DropMenuActive() {
        if (category !== 'Выберите категорию') {
            const notActiv = 'dropField';
            const active = 'dropFieldActive';

            return `${notActiv} ${active}`;
        }

        return 'dropField';
    }
    const dropListSelectJSX = (
        <div className="dropContainer">
            <div className={DropMenuActive()} onClick={listOpen}>
                <span className="categoryDrop">{category}</span>
            </div>

            {listActive && (
                <ul className="dropList">
                    {/* категории для доходв */}
                    {modalTypeTransaction === 'income' &&
                        getDebit.map((elem, idx) => {
                            return (
                                <li
                                    onClick={categoryClick}
                                    className="dropListItem"
                                    key={idx}
                                    data-id={elem.id}
                                >
                                    {elem.name}
                                </li>
                            );
                        })}
                    {/* {modalTypeTransaction === 'income' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Нерегулярный доход
                        </li>
                    )} */}

                    {/* категории для расхода */}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Основной
                        </li>
                    )}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Еда
                        </li>
                    )}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Авто
                        </li>
                    )}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Развитие
                        </li>
                    )}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Дети
                        </li>
                    )}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Дом
                        </li>
                    )}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Образование
                        </li>
                    )}
                    {modalTypeTransaction === 'spending' && (
                        <li onClick={categoryClick} className="dropListItem">
                            Остальное
                        </li>
                    )}
                </ul>
            )}

            <span className="dropIconModal">
                <svg className="dropIcon">
                    <use href={`${sprite}#dropItemModal`}></use>
                </svg>
            </span>
        </div>
    );

    return (
        <div className="modalContainer">
            <div className="containerClose" onClick={closeModalItem}>
                <span className="itemCloseModal">
                    <svg className="iconCloseBtn">
                        <use href={`${sprite}#closeModal`}></use>
                    </svg>
                </span>
            </div>
            <h2 className="titleText">Добавить Транзакцию</h2>
            <form
                onSubmit={submitHandler}
                id="modalTransaction"
                className="modalForm"
            >
                <div className="switchTypeBalance">
                    <span className={switchActiveDebet()}>Доход</span>
                    <div className="toggleContainerType">
                        <label
                            className="toggleTypeBody"
                            htmlFor="switchType"
                        ></label>
                        <span className={switchToggle()} id="toggle">
                            <svg className="modalBtnPlus">
                                <use
                                    href={
                                        modalTypeTransaction === 'income'
                                            ? `${sprite}#plusSvg`
                                            : `${sprite}#modalMinus`
                                    }
                                ></use>
                            </svg>
                        </span>
                    </div>
                    <input
                        className="switchToggleInput"
                        onChange={switchClickHandler}
                        name="modalTypeTransaction"
                        type="checkbox"
                        id="switchType"
                        defaultChecked
                    />
                    <span className={switchActive()}>Расход</span>
                </div>
                {dropListSelectJSX}
                <div className="sumContainer">
                    <input
                        className="sumField"
                        required
                        min="0.00"
                        step="0.01"
                        type="number"
                        placeholder="0.00"
                        // value={}
                    />
                </div>
                <div className="calendarContainer">
                    <Datetime
                        onChange={dateChange}
                        inputProps={{ className: 'calendarField' }}
                        initialValue={date}
                        closeOnSelect={true}
                        timeFormat={false}
                    />
                    <svg className="calendarIcon">
                        <use href={`${sprite}#calendarSvg`}></use>
                    </svg>
                </div>
                <div className="commentContainer">
                    <textarea
                        className="commentField"
                        placeholder="коментарий"
                    />
                </div>
            </form>
            <div className="buttonContainer">
                <button
                    className="submitButton"
                    type="submit"
                    onClick={() => {
                        dispatch(getFinanceOpertaion.addOperation({}));
                    }}
                >
                    Добавить
                </button>
                <button className="cancelButton" onClick={closeModalItem}>
                    Отмена
                </button>
            </div>
        </div>
    );
};