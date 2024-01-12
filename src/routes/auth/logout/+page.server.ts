import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ cookies }) => {
    await cookies.delete('session', { path: '/' });
    throw redirect(302, '/login');
  }
}