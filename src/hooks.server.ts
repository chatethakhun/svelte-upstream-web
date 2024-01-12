import { redirect } from "@sveltejs/kit";


const unProtectedRoutes: string[] = [
  '/login',
  '/register',
];

export const handle = async ({ event, resolve }) => {
  let user = null
  // event.cookies.delete('session', { path: '/' });
  // check if the cookie exist, and if exists, parse it to the user variable
  if(event.cookies.get('session') != undefined && event.cookies.get('session') != null){
    user = JSON.parse(event.cookies.get('session') || '{}')
  }

  const url = new URL(event.request.url);

  // validate the user existence and if the path is acceesible
  if (!user && !unProtectedRoutes.includes(url.pathname)) {
    throw redirect(302, '/login');
  }

  if(user){
    //set the user to the locals (i explain this later on the article)
    event.locals.user = user

    // redirect user if he is already logged if he try to access signin or signup
    if(unProtectedRoutes.includes(url.pathname)){
      throw redirect(302, '/')
    }
  }

  const response = await resolve(event)

  return response
}