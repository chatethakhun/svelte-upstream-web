import { fail, redirect } from '@sveltejs/kit';
import { login } from '../../services/auth/index.js';
import { dev } from '$app/environment';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = String(form.get('email')).toLowerCase().trim();
    const password = String(form.get('password'));

    if (!email || !password) {
      return fail(400, { invalid: true })
    }

    try {
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


    throw redirect(307, '/');
    } catch (error) {
      return fail(401, { wrongCredentials: true })
    }

  },
}