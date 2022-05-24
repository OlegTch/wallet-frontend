import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { userOperation } from '../../redux/user/user-operation';
import imgMan from '@assets/img/tablet/tabletMan.svg';
import sprite from '@assets/sprite.svg';
import Logo from '../logo';

import './loginForm.scss';
import '../registrationForm/registrationsForm.scss';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [type, setType] = useState('password');

    const showHiden = e => {
        e.preventDefault();
        e.stopPropagation();
        let currentType = type === 'password' ? 'input' : 'password';
        setType(currentType);
    };

    return (
        <section>
            <div className="login_img_container">
                <img className="login_img" src={imgMan} alt="" width="435px" />
                <h1>Finance App</h1>
            </div>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    dispatch(userOperation.login(values));
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required("Обов'язкове поле"),
                    password: Yup.string().required("Обов'язкове поле"),
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props;

                    return (
                        <div className="form_bg_filter">
                            <form
                                onSubmit={handleSubmit}
                                className="login_form"
                            >
                                <div className="login_form__logo">
                                    <Logo />
                                </div>
                                <label className="login_form__label">
                                    {errors.email && touched.email ? (
                                        <div style={{ color: 'red' }}>
                                            {errors.email}
                                        </div>
                                    ) : (
                                        <div style={{ height: '19px' }}></div>
                                    )}
                                    <svg className="login_form__icon">
                                        <use href={`${sprite}#email`}></use>
                                    </svg>
                                    <input
                                        className="login_form__input"
                                        id="email"
                                        placeholder=" E-mail"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </label>

                                <label className="login_form__label">
                                    {errors.password && touched.password ? (
                                        <div style={{ color: 'red' }}>
                                            {errors.password}
                                        </div>
                                    ) : (
                                        <div style={{ height: '19px' }}></div>
                                    )}

                                    <svg className="login_form__icon">
                                        <use href={`${sprite}#password`}></use>
                                    </svg>
                                    <input
                                        className="login_form__input"
                                        id="password"
                                        placeholder="Пароль"
                                        type={type}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    <span
                                        className="form__show"
                                        onClick={showHiden}
                                    >
                                        {type === 'input' ? 'HIDE' : 'SHOW'}
                                    </span>
                                </label>

                                <button
                                    className="login_form__btn login_form__btn--current"
                                    type="submit"
                                >
                                    <span>Вхід</span>
                                </button>

                                <Link
                                    to="/register"
                                    className="login_form__btn login_form__btn_color"
                                >
                                    <span>Реєстрація</span>
                                </Link>
                            </form>
                        </div>
                    );
                }}
            </Formik>
        </section>
    );
};
