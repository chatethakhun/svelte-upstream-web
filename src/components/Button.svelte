<script lang="ts">
  import { Button, Spinner } from 'flowbite-svelte';
  import type { Writable } from 'svelte/store';
  export let label: string
  export let loading: boolean
  export let onClick: () => void = () => {}
  export let type: "button" | "submit" = "button"
</script>

<Button type={type} on:click={onClick} class="w-full">
  {#if loading}
    <Spinner class="me-3" size="4" color="white" />
  {/if}
  {label}
</Button>