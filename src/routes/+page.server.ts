// export const actions = {
//   default: async ({ request, cookies }) => {
//     // cookies.delete('session', { path: '/' });
//     // throw redirect(302, '/login');
//   }
// }

import { getPosts } from '../services/posts/index.js';

export const load = async ({ locals }) => {
  try {
    const { data } = await getPosts(locals.user?.token);
    console.log({ data });
    
  } catch (error) {
    console.log(error)
  }
  return {
    user: locals.user
  }
}