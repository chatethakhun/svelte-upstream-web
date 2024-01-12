import { fail, redirect } from '@sveltejs/kit';
import { login } from '../../services/auth/index.js';
import { dev } from '$app/environment';
import * as yup from 'yup';
import { AxiosError } from 'axios';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
})


/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = String(form.get('email')).toLowerCase().trim();
    const password = String(form.get('password'));

    try {

      await schema.validateSync({ email, password }, { abortEarly: false });
      // login
      const { data: { status: { data: userData } } } = await login(email, password)

      // console.log({ response });
      const user = {
        ...userData.user,
        token: userData.token
      }
      cookies.set('session', JSON.stringify(user), {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: !dev,
        maxAge: 60 * 60 * 24 * 30
      });

      errors = {};

      throw redirect(307, '/');
    } catch (error) {
      
      if (error instanceof yup.ValidationError) {
        const emailErrorMessage = error.inner.find(inner => inner.path === 'email')?.message
        const passwordErrorMessage = error.inner.find(inner => inner.path === 'password')?.message
        
        const errors = {
          email: emailErrorMessage || '',
          password: passwordErrorMessage || ''
        }
        
        return fail(401, { validateErrors: errors, email, password })
      }

      if(error instanceof AxiosError) {
        return fail(error?.response?.status || 500, { serverError: true, errorMessage: error?.response?.data })
      }
    }

  },
}