import { useDispatch } from 'react-redux';
import { userOperation } from '../../redux/user/user-operation';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './registrationsForm.scss'
import { Logo } from '../shared/logo';
import Frame from '../../assets/img/tablet/Frame.png';
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isErrorUser } from '@redux/user/user-selector';
// import zxcvbn from 'zxcvbn';



export const RegistrationForm = () => {
   const dispatch = useDispatch();
   const [type, setType] = useState('password');
   // const [score, setScore] = useState(0);
   const errorUser = useSelector(isErrorUser);
   useEffect(() => {
      if (errorUser) {
         toast.error(errorUser);
      }
   }, [errorUser]);

   const showHiden = (e) => {
      e.preventDefault();
      e.stopPropagation();
      let currentType = type === 'password' ? 'input' : 'password'
      setType(currentType);
   }

   // const strength = (e) => {
   //    let password = e.target.value;
   //    if (password.length > 10) {
   //       strength += 1
   //    }
   //    if (password.length > 63) {
   //       strength += 1
   //    }
   //    if (/[a-z]/.test(password)) {
   //       strength += 1
   //    }
   //    if (/[A-Z]/.test(password)) {
   //       strength += 1
   //    }
   //    if (/[0-9]/.test(password)) {
   //       strength += 1
   //    }
   //    if (/[^a-zA-Z0-9]/.test(password)) {
   //       strength += 1
   //    }
   //    if (e.target.value.length === '') {

   //       let result = zxcvbn(e.target.value);
   //       console.log();
   //       setScore('1');
   //    } else {
   //       setScore(0);
   //    }
   // }

   return (
      <section className='register'>
         <div className='container__img'>
            <div className='position'>
               <img className="img" src={Frame} alt="" />
               <h1 className='title'>Finance App</h1>
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
               email: Yup.string().email().min(10).max(63).required('Required'),
               password: Yup.string()
                  .required('Required')
                  .min(6, 'Password must be at least 10 characters')
                  .max(16, 'Password must be at most 63 characters'),
               confirmPassword: Yup.string()
                  .required('Required')
                  .oneOf(
                     [Yup.ref('password'), null],
                     'Passwords must match',
                  ),
               name: Yup.string().min(
                  1,
                  'Name must be at least 1 characters',
               )
                  .max(12, 'Name must be at most 12 characters'),
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
                     <form className='form' onSubmit={handleSubmit}>

                        {/* //Логотип */}
                        <div className='form__logo'>
                           <Logo />
                        </div>


                        {/* //Поле для вводу емейла */}
                        <label className="form__label">
                           {errors.email && touched.email && errors.email}
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
                           {errors.password &&
                              touched.password &&
                              errors.password}
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
                              onBlur={handleBlur}
                              value={values.password}
                           />
                           <span className='form__show' onClick={showHiden}>
                              {type === 'input' ? "HIDE" : 'SHOW'}
                           </span>

                        </label>




                        {/* //Поле для вводу пароля підтвердження */}
                        <label className="form__label">
                           {errors.confirmPassword &&
                              touched.confirmPassword &&
                              errors.confirmPassword}
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
                           {/* <span className='form__strength' data-score={score} /> */}
                        </label>



                        {/* //Поле для вводу імені */}
                        <label className="form__label">
                           {errors.name && touched.name && errors.name}
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
                           disabled={isSubmitting}
                           className="form__button form__button--active"
                        >
                           РЕЄСТРАЦІЯ
                        </button>

                        {/* //Перехід на сторінку входу */}
                        <Link to='/login' className='form__button'>
                           ВХІД
                        </Link>
                     </form>
                  </div>
               );
            }}
         </Formik>

      </section >
   );
};
