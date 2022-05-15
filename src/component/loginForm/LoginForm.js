import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userOperation } from '../../redux/user/user-operation';
import { Logo } from '../shared/logo';
import sprite from '../../assets/sprite.svg';
import './loginForm.scss';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);

            case 'password':
                return setPassword(value);

            default:
                return;
        }
    };

    const handelSubmit = e => {
        e.preventDefault();
        console.log(e);

        dispatch(userOperation.login({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form
                onSubmit={handelSubmit}
                autoComplete="off"
                className="login_form"
            >
                <div className="login_form__logo">
                    <Logo />
                </div>
                <label className="login_form__label">
                    <svg className="login_form__icon">
                        <use href={`${sprite}#email`}></use>
                    </svg>
                    <input
                        className="login_form__input"
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label className="login_form__label">
                    <svg className="login_form__icon">
                        <use href={`${sprite}#password`}></use>
                    </svg>
                    <input
                        className="login_form__input"
                        placeholder="Пароль"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button
                    className="login_form__btn login_form__btn--current  "
                    type="submit"
                >
                    <span>Вход</span>
                </button>
                <button
                    className="login_form__btn login_form__btn_color"
                    type="button"
                >
                    <span>Регистрация</span>
                </button>
            </form>
        </div>
    );
}
