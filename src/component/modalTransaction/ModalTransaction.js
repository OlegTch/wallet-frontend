import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import {
    getCategoryDebet,
    getCategoryCredit,
} from '@redux/categories/categories-selector';
import { isSaveModalDateStatic } from '@redux/finance/finance-selector';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import { closeModalTransaction } from '@redux/finance/finance-slice';
import 'moment/locale/ru';
import { toast } from 'react-toastify';
import { validate } from 'indicative/validator';
import sprite from '@assets/sprite.svg';
import './modalTransaction.scss';

export const ModalTransaction = () => {
    const getCredit = useSelector(getCategoryCredit);
    const getDebet = useSelector(getCategoryDebet);
    const pushDate = useSelector(isSaveModalDateStatic);
    const [modalTypeTransaction, setModalTypeTransaction] = useState('income');
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState(getDebet[0].name);
    const [idCategory, setIdCategory] = useState(getDebet[0]._id);
    const [listActive, setListActive] = useState(false);
    const [summ, setSumm] = useState('');
    const [comment, setComment] = useState('');
    const [blocked, setBlocked] = useState(false);

    const dispatch = useDispatch();

    function closeModalItem() {
        dispatch(closeModalTransaction());
    }
    function closeModalClearLocal() {
        dispatch(closeModalTransaction());
        locStorageClear();
    }
    function saveLocStorage() {
        const typeLocStor = localStorage.setItem('Тип', modalTypeTransaction);

        const dateLocStor = localStorage.setItem('дата', date);

        const categLocStor = localStorage.setItem('категорії', category);

        const sumLocStor = localStorage.setItem('сума', summ);

        const commenLocStor = localStorage.setItem('коментар', comment);

        const listLocStor = localStorage.setItem('список', listActive);

        const idCategoryLocStorage = localStorage.setItem(
            'ідКатегорія',
            idCategory,
        );
    }
    function locStorageClear() {
        localStorage.removeItem('Тип');
        localStorage.removeItem('категорії');
        localStorage.removeItem('коментар');
        localStorage.removeItem('сума');
        localStorage.removeItem('ідКатегорія');
    }
    function locStorageUseDate() {
        const typeLocStor = localStorage.getItem('Тип');
        if (typeLocStor) {
            setModalTypeTransaction(typeLocStor);
        }
        const categLocStor = localStorage.getItem('категорії');
        if (categLocStor) {
            setCategory(categLocStor);
        }
        const commenLocStor = localStorage.getItem('коментар');
        if (commenLocStor) {
            setComment(commenLocStor);
        }
        const sumLocStor = localStorage.getItem('сума');
        if (sumLocStor) {
            setSumm(makeMoney(sumLocStor));
        }
        const idCategoryLocStorage = localStorage.getItem('ідКатегорія');
        if (idCategoryLocStorage) {
            setIdCategory(idCategoryLocStorage);
        }
    }
    useEffect(() => {
        locStorageUseDate();
    }, []);

    useEffect(() => {
        const backdrop = document.querySelector('#backdrop');

        function clickBackdrop(e) {
            if (e.target === backdrop) {
                saveLocStorage();
                closeModalItem();
            }
        }

        function pressEsc(e) {
            if (e.code === 'Escape') {
                saveLocStorage();
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
            locStorageClear();
        }
    }, [pushDate]);

    function dateChange(e) {
        setDate(e._d);
    }

    function listOpen() {
        setListActive(!listActive);
    }
    function categoryClick(e) {
        setIdCategory(e.target.dataset.id);
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
            const defPoss = 'switchTypeBalance__text';
            const switchPoss = 'switchTypeBalance__text__active';
            return `${defPoss} ${switchPoss}`;
        }

        return 'switchTypeBalance__text';
    }
    function switchActive() {
        if (modalTypeTransaction === 'spending') {
            const defPoss = 'switchTypeBalance__text';
            const switchPoss = 'switchTypeBalance__text__active_red';
            return `${defPoss} ${switchPoss}`;
        }

        return 'switchTypeBalance__text';
    }

    function summInput(e) {
        setSumm(e.target.value);
    }

    function commentInput(e) {
        setComment(e.target.value);
    }

    function switchClickHandler(e) {
        if (summ) {
            setSumm(makeMoney(summ));
        }
        if (e.target.attributes.checked) {
            setModalTypeTransaction('spending');
            setCategory('Виберіть категорію');
            setIdCategory(null);
            return;
        }

        setModalTypeTransaction('income');
        setCategory(getDebet[0].name);
        setIdCategory(getDebet[0]._id);
    }
    const validateSchema = {
        type: 'required|boolean',
        category: 'required|string',
        sum: 'required|number',
        comment: 'string',
        day: 'required|number',
        month: 'required|number',
        year: 'required|number',
    };
    const submitHandler = async e => {
        e.preventDefault();
        const modalTransaction = {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            type: modalTypeTransaction === 'income' ? true : false,
            category: idCategory,
            sum: parseFloat(summ),
            comment: comment,
        };

        try {
            await validate(modalTransaction, validateSchema);
        } catch (error) {
            toast.error(error[0].message);
            return;
        }
        setBlocked(true);
        dispatch(
            getFinanceOpertaion.addOperation({
                datetime: date,
                income: modalTypeTransaction === 'income' ? true : false,
                category: idCategory,
                comment: comment === '' ? undefined : comment,
                sum: summ,
            }),
        );
        locStorageClear();
    };

    function DropMenuActive() {
        if (category !== 'Виберіть категорію') {
            const defPoss = 'dropField';
            const switchPoss = 'dropFieldActive';

            return `${defPoss} ${switchPoss}`;
        }

        return 'dropField';
    }
    const dropListSelect = (
        <div className="dropContainer">
            <div className={DropMenuActive()} onClick={listOpen}>
                <span className="categoryDrop">{category}</span>
            </div>

            {listActive && (
                <ul className="dropList">
                    {modalTypeTransaction === 'income' &&
                        getDebet.map((elem, idx) => {
                            return (
                                <li
                                    onClick={categoryClick}
                                    className="dropListItem"
                                    key={idx}
                                    data-id={elem._id}
                                >
                                    {elem.name}
                                </li>
                            );
                        })}

                    {modalTypeTransaction === 'spending' &&
                        getCredit.map((elem, idx) => {
                            return (
                                <li
                                    onClick={categoryClick}
                                    className="dropListItem"
                                    key={idx}
                                    data-id={elem._id}
                                >
                                    {elem.name}
                                </li>
                            );
                        })}
                </ul>
            )}

            <span className="dropIconModal">
                <svg className="dropIcon">
                    <use href={`${sprite}#dropItemModal`}></use>
                </svg>
            </span>
        </div>
    );

    const makeMoney = n => {
        return parseFloat(n).toFixed(2);
    };

    return (
        <div className="modalContainer">
            <div className="containerClose" onClick={closeModalClearLocal}>
                <span className="itemCloseModal">
                    <svg className="iconCloseBtn">
                        <use href={`${sprite}#closeModal`}></use>
                    </svg>
                </span>
            </div>
            <h2 className="titleText">Додати Транзакцію</h2>
            <form
                onSubmit={submitHandler}
                id="modalTransaction"
                className="modalForm"
            >
                <div className="switchTypeBalance">
                    <span className={switchActiveDebet()}>Дохід</span>
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
                        defaultChecked={
                            modalTypeTransaction === 'income' ? true : false
                        }
                    />
                    <span className={switchActive()}>Витрати</span>
                </div>
                {dropListSelect}
                <div className="sumContainer">
                    <input
                        className="sumField"
                        onChange={summInput}
                        value={summ}
                        required
                        min="0.00"
                        step="0.01"
                        type="number"
                        inputMode="decimal"
                        placeholder="0.00"
                        lang="ua"
                        onBlur={e => {
                            e.target.value = makeMoney(e.target.value);
                        }}
                        onKeyDown={e => {
                            if (e.key === '.') {
                                e.key = ',';
                            }
                        }}
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
                        type="text"
                        maxLength="200"
                        className="commentField"
                        placeholder="коментар"
                        onChange={commentInput}
                        value={comment}
                        pattern="/^[A-Za-zа-яА-я]{5,10}$/"
                    />
                </div>
                <div className="buttonContainer">
                    <button
                        className="submitButton"
                        type="submit"
                        disabled={blocked}
                    >
                        Додати
                    </button>
                    <button
                        className="cancelButton"
                        onClick={closeModalClearLocal}
                        disabled={blocked}
                    >
                        Скасувати
                    </button>
                </div>
            </form>
        </div>
    );
};
