import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from '../api/index';
import Router from 'next/router';
import Link from 'next/link';

export default function Register() {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required('first name required'),
    lastName: yup.string().required('last name required'),
    email: yup.string().email().required('email required'),
    password: yup.string().required('password required'),
    confirmPassword: yup.string().required('confirm password required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const response = await register(values);
      localStorage.setItem('user', JSON.stringify(response.data));
      Router.push('/');
    },
  });

  return (
    <div className='register'>
      <div className='register__left'>
        <h1 className='register__left__title'>Register to Pomolive</h1>
      </div>
      <div className='register__right'>
        <form onSubmit={formik.handleSubmit}>
          <div className='register__right__inputs'>
            <Input
              placeholder='firstname'
              id='firstName'
              name='firstName'
              type='firstName'
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName}

            <Input
              placeholder='lastname'
              id='lastName'
              name='lastName'
              type='lastName'
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName}

            <Input
              placeholder='Email'
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email}
            <Input
              placeholder='Password'
              id='password'
              name='password'
              type='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password}
            <Input
              placeholder='confirmPassword'
              id='confirmPassword'
              name='confirmPassword'
              type='confirmPassword'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword}
          </div>
          <div className='register__right__buttons'>
            <Button
              text='Register to Pomolive'
              type='submit'
              style={{ padding: '1rem', margin: '1rem 0' }}
            />
          </div>
          <p>
            If you already have a account{' '}
            <Link href='/login'>
              <span
                style={{ color: 'red', cursor: 'pointer', borderBottom: '1px solid red' }}
              >
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
