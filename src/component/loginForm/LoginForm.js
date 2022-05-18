import * as Yup from 'yup';
import { Formik } from 'formik';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { userOperation } from '../../redux/user/user-operation';
import { Logo } from '../shared/logo';

import sprite from '../../assets/sprite.svg';
import imgMan from '../../assets/img/tablet/tabletMan.svg';

import './loginForm.scss';
import { isAuth } from '../../redux/user/user-selector';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const isLoggedIn = useSelector(isAuth);

    useEffect(() => {
        // console.log(isLoggedIn);
        if (isLoggedIn) {
            push('/');
            // console.log('ПЕРЕХОД НА ХОМЕ');
        }
    }, [isLoggedIn]);

    return (
        <section>
            <div className="login_img_container">
                <img className="login_img" src={imgMan} alt="" width="435px" />
                <h1>Finance App</h1>
            </div>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={({ email, password }) => {
                    dispatch(userOperation.login({ email, password }));
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required('Обов' + "'" + 'язкове поле'),
                    password: Yup.string().required(
                        'Обов' + "'" + 'язкове поле',
                    ),
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
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
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">
                                            {errors.email}
                                        </div>
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
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">
                                            {errors.password}
                                        </div>
                                    )}
                                    <svg className="login_form__icon">
                                        <use href={`${sprite}#password`}></use>
                                    </svg>
                                    <input
                                        className="login_form__input"
                                        id="password"
                                        placeholder="Пароль"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </label>

                                <button
                                    className="login_form__btn login_form__btn--current  "
                                    type="submit"
                                    disabled={isSubmitting}
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
