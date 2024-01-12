<script>
  import { failureToast } from "$lib/toastTheme";
  import { toast } from "@zerodevx/svelte-toast";
  import Button from "../../components/Button.svelte";


  import TextInput from "../../components/TextInput.svelte";

  export let form;
  toast.pop(0)
  if(form?.serverError) {
    failureToast(form?.errorMessage); 
  }

</script>
<div
  class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Sign in to your account
      </h1>
      <form class="space-y-4 md:space-y-6" method="POST" novalidate>
        <TextInput
          id="name"
          name="name"
          label="Name"
          errorMessage={form?.nameErrorMessage}
          placeholder="Name"
          value={form?.name || ""}
        />
        <TextInput
          type="email"
          id="email"
          name="email"
          label="Email"
          errorMessage={form?.emailErrorMessage}
          placeholder="abcd@example.com"
          value={form?.email || ""}
        />
        <TextInput
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="••••••••"
          errorMessage={form?.passwordErrorMessage}
        />
        <TextInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="••••••••"
          errorMessage={form?.confirmPasswordErrorMessage}
        />
        <!-- <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
            </div> -->
        <!-- <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >Sign in</button
            > -->
        <Button type="submit" label="Register" />

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a
            href="login"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Login</a
          >
        </p>
      </form>
    </div>
  </div>
</div>