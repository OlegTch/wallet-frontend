import { useDispatch } from 'react-redux';
import { userOperation } from '../../redux/user/user-operation';
import { Formik } from 'formik';
import { Logo } from '../shared/logo';
import sprite from '../../assets/sprite.svg';
import imgMan from '../../assets/img/tablet/tabletMan.svg';
import './loginForm.scss';
import * as Yup from 'yup';

export default function LoginForm() {
    const dispatch = useDispatch();

    return (
        <section>
            <div className="login_img_container">
                <img className="login_img" src={imgMan} alt="" width="435px" />
                <h1>Finance App</h1>
            </div>

            <Formik
                initialValues={{ email: '' }}
                onSubmit={({ email, password }) => {
                    dispatch(userOperation.login({ email, password }));
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required('Required'),
                    password: Yup.string().required('Required'),
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
                        handleReset,
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
                                {/* {errors.email && touched.email && (
                                <div className="input-feedback">
                                    {errors.email}
                                </div>
                            )} */}
                                <label className="login_form__label">
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
                                {/* {errors.password && touched.password && (
                                <div className="input-feedback">
                                    {errors.password}
                                </div>
                            )} */}

                                <button
                                    className="login_form__btn login_form__btn--current  "
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    <span>Вхід</span>
                                </button>
                                <button
                                    className="login_form__btn login_form__btn_color"
                                    type="button"
                                    onClick={handleReset}
                                    disabled={isSubmitting}
                                >
                                    <span>Реєстрація</span>
                                </button>
                            </form>
                        </div>
                    );
                }}
            </Formik>
        </section>
    );
}
