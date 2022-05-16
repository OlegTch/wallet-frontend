import { useDispatch } from 'react-redux';
import { userOperation } from '../../redux/user/user-operation';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const RegistrationForm = () => {
   const dispatch = useDispatch();
   // const isAuth = useSelector(state => state.user.isAuth);
   return (
      <div>
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
               console.log(user)
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
                  //Форма для реєстрації

                  <form onSubmit={handleSubmit}>
                     <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                     />
                     {errors.email && touched.email && errors.email}
                     <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                     />
                     {errors.password &&
                        touched.password &&
                        errors.password}
                     <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Подтвердите пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                     />
                     {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword}
                     <input
                        type="name"
                        name="name"
                        placeholder="Ваше имя"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                     />
                     {errors.name && touched.name && errors.name}

                     <button
                        type="submit"
                        disabled={isSubmitting}
                     >
                        РЕГИСТРАЦИЯ
                     </button>

                     <button type="submit" disabled={isSubmitting}>
                        ВХОД
                     </button>
                  </form>
               );
            }}
         </Formik>
      </div>
   );
};
