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
    const { data: { data: posts, included } } = await getPosts(locals.user?.token);
    // console.log('included', included, posts);

    const postsWithTags = posts.map((post: Post) => {
      post.relationships.tags.data = included.filter((include: { type: string }) => include.type === 'tag')
      return post
      // post.tags = included.filter((tag: any) => post.relationships.tags.data.includes(tag.id))
    })

    console.log(JSON.stringify(postsWithTags));
    
    return {
      user: locals.user,
      posts: postsWithTags,
    }
  } catch (error: AxiosError | any) {
    console.log('post server load error', error)
    handleRemoveCookie(error, cookies)
  }
  
}