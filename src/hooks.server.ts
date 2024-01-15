import { redirect } from "@sveltejs/kit";



const public_paths = [
  '/login',
  '/register'
];

// function to verify if the request path is inside the public_paths array
function isPathAllowed(path: string) {
  return public_paths.some(allowedPath =>
    path === allowedPath || path.startsWith(allowedPath + '/')
  );
}

export const handle = async ({ event, resolve }) => {
  let user = null
  const session = event.cookies.get('session')

  
  // check if the cookie exist, and if exists, parse it to the user variable
  if(session != undefined && session != null){
    user = JSON.parse(session)
  }
  const url = new URL(event.request.url);

  // validate the user existence and if the path is acceesible
  if (!user && !isPathAllowed(url.pathname)) {
    throw redirect(302, '/login');
  }

  
  if(user){
    //set the user to the locals (i explain this later on the article)
    event.locals.user = user

    // redirect user if he is already logged if he try to access signin or signup
    if(url.pathname == '/register' || url.pathname == '/login'){
      throw redirect(302, '/')
    }
  }

  const response = await resolve(event)

  return response
}