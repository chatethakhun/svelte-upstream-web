// export const actions = {
//   default: async ({ request, cookies }) => {
//     // cookies.delete('session', { path: '/' });
//     // throw redirect(302, '/login');
//   }
// }

import { postStore } from '$lib/store.js';
import { AxiosError } from 'axios';
import { getPosts } from '../services/posts/index.js';
import { handleRemoveCookie } from '$lib/unAuthenticateResponse.js';

export const load = async ({ locals, cookies }) => {
  try {
    const { data: posts } = await getPosts(locals.user?.token);
    // console.log('included', included, posts);

    return {
      user: locals.user,
      posts ,
    }
  } catch (error: AxiosError | any) {
    console.log('post server load error', error)
    handleRemoveCookie(error, cookies)
  }
  
}