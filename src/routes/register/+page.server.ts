import * as yup from 'yup'
import { register } from '../../services/auth/index.js';
import { dev } from '$app/environment';
import { fail, redirect } from '@sveltejs/kit';
import { AxiosError } from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
})

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = String(form.get('email')).toLowerCase().trim();
    const password = String(form.get('password'));
    const confirmPassword = String(form.get('confirmPassword'));
    const name = String(form.get('name')).trim();


    try {
      await schema.validateSync({ name, email, password, confirmPassword }, { abortEarly: false });
      // register
      const { data } = await register(email, password, name)
      
      const user = {
        ...data.data,
        token: data.token
      }

      await cookies.set('session', JSON.stringify(user), {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: !dev,
        maxAge: 60 * 60 * 24 * 30
      });

      throw redirect(302, '/');
      
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const emailErrorMessage = error.inner.find(inner => inner.path === 'email')?.message
        const passwordErrorMessage = error.inner.find(inner => inner.path === 'password')?.message
        const confirmPasswordErrorMessage = error.inner.find(inner => inner.path === 'confirmPassword')?.message
        const nameErrorMessage = error.inner.find(inner => inner.path === 'name')?.message
        return fail(400, {
          emailErrorMessage,
          passwordErrorMessage,
          confirmPasswordErrorMessage,
          nameErrorMessage,
          name,
          email,
        })
      }

      if(error instanceof AxiosError) {
        return fail(error?.response?.status || 500, { serverError: true, errorMessage: error?.response?.data.status.message, name, email })
      }

      throw redirect(302, '/');
    }
    
  }
}