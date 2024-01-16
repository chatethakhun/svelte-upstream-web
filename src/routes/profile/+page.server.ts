export const actions = {
  default:async ({ request, locals }) => {
    const formData = await request.formData(); // Get the form data from the request.
    const name = formData.get('name') as string;
    const thumbnail = formData.get('profile-image') as string;

    console.log({ thumbnail, name })
  }
}