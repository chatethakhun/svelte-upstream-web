<script>
  import "./styles.css";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import Header from "../components/Header.svelte";
  import { page } from "$app/stores";
  import { userStore } from "../lib/store";

  export let data;

  $page.data.user;
  $userStore = data.user;
</script>

<div class="app">
  <main>
    {#if $userStore}
      <Header />
    {/if}
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-[calc(100vh_-_60px)]">
        <slot />
      </div>
    </section>
  </main>
  <SvelteToast />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
