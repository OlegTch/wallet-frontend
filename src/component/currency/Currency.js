import React, { useEffect, useState } from 'react';
import currencyApi from '@services/currencyApi';

import { currencies } from '@assets/constants.js';
import './curr.scss';

export default function CurrencyTable() {
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        const fetchCurrency = async () => {
            const data = await currencyApi.fetchCurrency();
            const filteredCurrencies = [];
            currencies.forEach(currency => {
                data.forEach(element => {
                    parseInt(element.buy).toFixed(2);
                    if (element.ccy === currency) {
                        filteredCurrencies.push({
                            ccy: element.ccy,
                            buy: Number(element.buy).toFixed(2),
                            sale: Number(element.sale).toFixed(2),
                        });
                    }
                });
            });
            setCurrency(filteredCurrencies);
            localStorage.setItem(
                'currency',
                JSON.stringify(filteredCurrencies),
            );
            localStorage.setItem('currencyTime', Date.now());
        };
        let currencyLS = JSON.parse(localStorage.getItem('currency'));
        let currencyTime = JSON.parse(localStorage.getItem('currencyTime'));
        if (!currencyLS) {
            fetchCurrency();
        }
        if (Date.now() - currencyTime > 3600000) {
            fetchCurrency();
        } else {
            setCurrency(currencyLS);
        }
    }, []);

    return (
        <div className="currency">
            <table>
                <thead>
                    <tr>
                        <td>Валюта</td>
                        <td>Купівля</td>
                        <td>Продаж</td>
                    </tr>
                </thead>
                <tbody>
                    {currency.map(item => {
                        return (
                            <tr key={item.ccy}>
                                <td>{item.ccy}</td>
                                <td>{item.buy}</td>
                                <td>{item.sale}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
