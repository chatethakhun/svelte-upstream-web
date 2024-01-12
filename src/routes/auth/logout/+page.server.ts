import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ fetch, cookies }) => {
    cookies.delete('session', { path: '/' });
    throw redirect(302, '/login');
  }
}