<script>
  import { applyAction, enhance } from '$app/forms';
  import Button from "./Button.svelte";
  import TextInput from "./TextInput.svelte";
</script>

<header class="antialiased">
  <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex justify-start items-center">
        <a href="https://flowbite.com" class="flex mr-4">
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Upstream</span
          >
        </a>
      </div>
      <div class="flex items-center lg:order-2 gap-2">
        <form action="#" method="GET" class="hidden lg:block lg:pl-2">
          <label for="topbar-search" class="sr-only">Search</label>
          <div class="relative mt-1 lg:w-96">
            <TextInput
              id="search"
              name="search"
              placeholder="Search"
              value=""
            />
          </div>
        </form>
        <Button label="+ Add New Post" />
        <form
          action="/auth/logout"
          method="post"
          use:enhance={async () => {
            return async ({ result }) => {
              await applyAction(result);
            };
          }}
        >
          <Button type="submit" label="Logout" color="none" />
        </form>
      </div>
    </div>
  </nav>
</header>
