<script lang="ts">

  import Button from "../../components/Button.svelte";
  import TextInput from "../../components/TextInput.svelte";

  const credentials = {
    email: "jack@acme.inc",
    password: "Password1!",
  };


  export let form;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <section class="bg-gray-50 dark:bg-gray-900">
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
          <form
            class="space-y-4 md:space-y-6"
            method="POST"
            novalidate
          >
            <TextInput
              type="email"
              id="email"
              name="email"
              label="Email"
              errorMessage={form?.invalid ? "This field is required" : ""}
              placeholder="abcd@example.com"
            />
            <TextInput
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="••••••••"
              errorMessage={form?.invalid ? "This field is required" : ""}
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
            <Button type="submit" label="Login" />

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Sign up</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</section>

<style>
</style>
