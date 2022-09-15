import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from '../api/index';
import Router from 'next/router';
import Link from 'next/link';

export default function Login() {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required('email required'),
    password: yup.string().required('password required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const response = await login(values);
      localStorage.setItem('user', JSON.stringify(response.data));
      Router.push('/');
    },
  });

  return (
    <div className='register'>
      <div className='register__left'>
        <h1 className='register__left__title'>Login to Pomolive</h1>
      </div>
      <div className='register__right'>
        <form onSubmit={formik.handleSubmit}>
          <div className='register__right__inputs'>
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
          </div>
          <div className='register__right__buttons'>
            <Button text='Login to Pomolive' type='submit' />
          </div>
        </form>
        <p>
          If you don't have a account <Link href='/register'>Register</Link>{' '}
        </p>
      </div>
    </div>
  );
}
