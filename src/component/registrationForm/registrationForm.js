import { useDispatch } from 'react-redux';
import { userOperation } from '../../redux/user/user-operation';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './registrationsForm.scss';
import { Logo } from '../shared/logo';
import Frame from '../../assets/img/tablet/Frame.png';
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

export const RegistrationForm = () => {
    const dispatch = useDispatch();

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
                onSubmit={({ email, password, name }) => {
                    const user = { name, email, password };
                    // console.log(user)
                    dispatch(userOperation.register(user));
                }}
                //валідація форми
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required('Required'),
                    password: Yup.string()
                        .required('Required')
                        .min(6, 'Password must be at least 6 characters')
                        .max(12, 'Password must be at most 12 characters'),
                    confirmPassword: Yup.string()
                        .required('Required')
                        .oneOf(
                            [Yup.ref('password'), null],
                            'Passwords must match',
                        ),
                    name: Yup.string().min(
                        2,
                        'Name must be at least 2 characters',
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
                        <div className="form__filter">
                            {/* //Форма для реєстрації */}
                            <form className="form" onSubmit={handleSubmit}>
                                {/* //Логотип */}
                                <div className="form__logo">
                                    <Logo />
                                </div>

                                {/* //Поле для вводу емейла */}
                                <label className="form__label">
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
                                {/* {errors.email && touched.email && errors.email} */}

                                {/* //Поле для вводу пароля */}
                                <label className="form__label">
                                    <svg className="form__icon">
                                        <use href={`${sprite}#password`}></use>
                                    </svg>
                                    <input
                                        className="form__input"
                                        type="password"
                                        name="password"
                                        placeholder="Пароль"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </label>
                                {/* {errors.password &&
                        touched.password &&
                        errors.password} */}

                                {/* //Поле для вводу пароля підтвердження */}
                                <label className="form__label">
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
                                </label>
                                {/* {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword} */}

                                {/* //Поле для вводу імені */}
                                <label className="form__label">
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
                                {/* {errors.name && touched.name && errors.name} */}

                                {/* //Кнопка для відправки даних */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="form__button form__button--active"
                                >
                                    РЕГІСТРАЦІЯ
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
