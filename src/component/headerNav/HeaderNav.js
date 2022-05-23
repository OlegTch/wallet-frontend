import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { userOperation } from '@redux/user/user-operation';
import { getName, isLoading } from '@redux/user/user-selector';
import ButtonExit from '@component/buttonExit';
import sprite from '@assets/sprite.svg';
import './headerNav.scss';

const HeaderNav = () => {
    const userName = useSelector(getName);
    const isLoadingUser = useSelector(isLoading);
    const [isUpdateName, setIsUpdateName] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const dispatch = useDispatch();

    const onClickName = () => {
        setIsUpdateName(true);
    };

    const onCancel = () => {
        setIsUpdateName(false);
    };

    useEffect(() => {
        if (!isLoadingUser && isSave) {
            setIsUpdateName(false);
            setIsSave(false);
        }
    }, [isLoadingUser, isSave]);

    return (
        <ul className="header_nav__list">
            <li className="header_nav__item header_nav_item__click">
                {!isUpdateName ? (
                    <span className="header_nav__text" onClick={onClickName}>
                        {userName}
                    </span>
                ) : (
                    <Formik
                        initialValues={{
                            name: userName,
                        }}
                        onSubmit={({ name }) => {
                            dispatch(
                                userOperation.updateUser({ userName: name }),
                            );
                            setIsSave(true);
                        }}
                        validationSchema={Yup.object().shape({
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
                                <form
                                    className="form_update_name"
                                    onSubmit={handleSubmit}
                                >
                                    <label className="form_update_name__label">
                                        {errors.name && touched.name ? (
                                            <div style={{ color: 'red' }}>
                                                {errors.name}
                                            </div>
                                        ) : (
                                            <div
                                                style={{ height: '19px' }}
                                            ></div>
                                        )}

                                        <input
                                            className="form_update_name__input"
                                            type="name"
                                            name="name"
                                            placeholder="Ваше імя"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </label>

                                    <button
                                        type="submit"
                                        className="form_update_name__button form_update_name__button--active"
                                    >
                                        <svg className="form_update_name__icon form_update_name__icon--green">
                                            <use href={`${sprite}#ok`}></use>
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        className="form_update_name__button"
                                        onClick={onCancel}
                                    >
                                        <svg className="form_update_name__icon form_update_name__icon--red">
                                            <use
                                                href={`${sprite}#cancel`}
                                            ></use>
                                        </svg>
                                    </button>
                                </form>
                            );
                        }}
                    </Formik>
                )}
            </li>
            <li className="header_nav__item">
                <ButtonExit />
            </li>
        </ul>
    );
};

export default HeaderNav;
