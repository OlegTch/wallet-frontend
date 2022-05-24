import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { closeModalChangeName } from '@redux/user/user-slice';
import { userOperation } from '@redux/user/user-operation';
import { getName, isLoading } from '@redux/user/user-selector';
import './ModalChangeName.scss';

const ModalChangeName = () => {
    const dispatch = useDispatch();
    const isLoadingUser = useSelector(isLoading);
    const userName = useSelector(getName);

    const closeDeleteModal = () => {
        dispatch(closeModalChangeName());
    };

    const onClickYes = e => {
        e.target.style.disabled = true;
    };

    useEffect(() => {
        const backdrop = document.querySelector('#backdrop');

        function clickBackdrop(e) {
            if (e.target === backdrop) {
                closeDeleteModal();
            }
        }

        function pressEsc(e) {
            if (e.code === 'Escape') {
                closeDeleteModal();
            }
        }

        document.addEventListener('click', clickBackdrop);
        document.addEventListener('keydown', pressEsc);

        return function cleanup() {
            document.removeEventListener('click', clickBackdrop);
            document.removeEventListener('keydown', pressEsc);
        };
    }, [closeDeleteModal]);

    return (
        <div className="containerDelete">
            <div>
                <Formik
                    initialValues={{
                        name: userName,
                    }}
                    onSubmit={({ name }) => {
                        dispatch(userOperation.updateUser({ userName: name }));
                        closeDeleteModal();
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
                                        <div style={{ height: '19px' }}></div>
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
                                    className="btnDelete"
                                    type="submit"
                                    onClick={onClickYes}
                                >
                                    <span>Зберегти</span>
                                </button>

                                <button
                                    className="btnDelete"
                                    onClick={closeDeleteModal}
                                >
                                    Скасувати
                                </button>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

export default ModalChangeName;
