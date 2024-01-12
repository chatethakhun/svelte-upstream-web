<script lang="ts">
  import { Button, Spinner } from "flowbite-svelte";
  export let label: string;
  export let loading: boolean = false;
  export let onClick: () => void = () => {};
  export let type: "button" | "submit" = "button";
  export let color: "primary" | "alternative" | "dark" | "light" | "none" = "primary";
</script>

<Button {type} on:click={onClick} class="w-full whitespace-nowrap" {color}>
  {#if loading}
    <Spinner class="me-3" size="4" color="white" />
  {/if}
  {label}
</Button>
