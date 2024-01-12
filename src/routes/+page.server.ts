// export const actions = {
//   default: async ({ request, cookies }) => {
//     // cookies.delete('session', { path: '/' });
//     // throw redirect(302, '/login');
//   }
// }

import { postStore } from '$lib/store.js';
import { getPosts } from '../services/posts/index.js';

export const load = async ({ locals }) => {
  try {
    const { data: { data: posts } } = await getPosts(locals.user?.token);
    postStore.set(posts)
    
    return {
      user: locals.user,
      posts,
    }
  } catch (error) {
    console.log('post server load error', error)
  }
  
}