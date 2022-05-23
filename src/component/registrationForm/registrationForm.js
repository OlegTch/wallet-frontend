import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { userOperation } from '@redux/user/user-operation';
import Logo from '../logo';
import Frame from '@assets/img/tablet/Frame.png';
import sprite from '@assets/sprite.svg';
import { PasswordIndicator } from './PasswordIndicator';
import { isErrorUser } from '@redux/user/user-selector';
import { clearError } from '@redux/user/user-slice';
import './registrationsForm.scss';

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [type, setType] = useState('password');
    const [showLine, setShowLine] = useState(false);
    const errorUser = useSelector(isErrorUser);

    useEffect(() => {
        if (errorUser) {
            toast.error(errorUser);
            dispatch(clearError());
        }
    }, [errorUser]);

    const showHiden = e => {
        e.preventDefault();
        e.stopPropagation();
        let currentType = type === 'password' ? 'input' : 'password';
        setType(currentType);
    };

    return (
        <section className="register">
            <div className="container__img">
                <div className="position">
                    <img className="img" src={Frame} alt="" />
                    <h1 className="title">Finance App</h1>
                </div>
            </div>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                }}
                //відправляємо дані на сервер
                onSubmit={({ name, email, password }) => {
                    const user = { name, email, password };

                    dispatch(userOperation.register(user));
                }}
                //валідація форми
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .min(10)
                        .max(63)
                        .required("Обов'язкове поле"),
                    password: Yup.string()
                        .required("Обов'язкове поле")
                        .min(6, 'Пароль занадто короткий (мінімум 6 символів)')
                        .max(
                            16,
                            'Пароль занадто довгий (максимум 16 символів)',
                        ),
                    confirmPassword: Yup.string()
                        .required("Обов'язкове поле")
                        .oneOf(
                            [Yup.ref('password'), null],
                            'Паролі не співпадають',
                        ),
                    name: Yup.string()
                        .min(1, "Ім'я не може бути порожнім")
                        .max(12, "Ім'я не може бути більше 12 символів")
                        .required("Обов'язкове поле"),
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
                        <div className="form__filter">
                            {/* //Форма для реєстрації */}
                            <form className="form" onSubmit={handleSubmit}>
                                {/* //Логотип */}
                                <div className="form__logo">
                                    <Logo />
                                </div>

                                {/* //Поле для вводу емейла */}
                                <label className="form__label">
                                    {errors.email && touched.email ? (
                                        <div style={{ color: 'red' }}>
                                            {errors.email}
                                        </div>
                                    ) : (
                                        <div style={{ height: '19px' }}></div>
                                    )}

                                    <svg className="form__icon">
                                        <use href={`${sprite}#email`}></use>
                                    </svg>
                                    <input
                                        className="form__input"
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </label>

                                {/* //Поле для вводу пароля */}
                                <label className="form__label">
                                    {errors.password && touched.password ? (
                                        <div style={{ color: 'red' }}>
                                            {errors.password}
                                        </div>
                                    ) : (
                                        <div style={{ height: '19px' }}></div>
                                    )}
                                    <svg className="form__icon">
                                        <use href={`${sprite}#password`}></use>
                                    </svg>
                                    <input
                                        className="form__input"
                                        type={type}
                                        name="password"
                                        placeholder="Пароль"
                                        onChange={handleChange}
                                        // onKeyUp={strength}
                                        onFocus={() => setShowLine(true)}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <span
                                        className="form__show"
                                        onClick={showHiden}
                                    >
                                        {type === 'input' ? 'HIDE' : 'SHOW'}
                                    </span>
                                </label>

                                {/* //Поле для вводу пароля підтвердження */}
                                <label className="form__label">
                                    {errors.confirmPassword &&
                                    touched.confirmPassword ? (
                                        <div style={{ color: 'red' }}>
                                            {errors.confirmPassword}
                                        </div>
                                    ) : (
                                        <div style={{ height: '19px' }}></div>
                                    )}
                                    <svg className="form__icon">
                                        <use href={`${sprite}#password`}></use>
                                    </svg>
                                    <input
                                        className="form__input"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Підтвердити пароль"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                    />
                                    <PasswordIndicator
                                        show={showLine}
                                        password={values.password}
                                    />
                                </label>

                                {/* //Поле для вводу імені */}
                                <label className="form__label">
                                    {errors.name && touched.name ? (
                                        <div style={{ color: 'red' }}>
                                            {errors.name}
                                        </div>
                                    ) : (
                                        <div style={{ height: '19px' }}></div>
                                    )}
                                    <svg className="form__icon">
                                        <use href={`${sprite}#name`}></use>
                                    </svg>
                                    <input
                                        className="form__input"
                                        type="name"
                                        name="name"
                                        placeholder="Ваше імя"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </label>

                                {/* //Кнопка для відправки даних */}
                                <button
                                    type="submit"
                                    className="form__button form__button--active"
                                >
                                    РЕЄСТРАЦІЯ
                                </button>

                                {/* //Перехід на сторінку входу */}
                                <Link to="/login" className="form__button">
                                    ВХІД
                                </Link>
                            </form>
                        </div>
                    );
                }}
            </Formik>
        </section>
    );
};
