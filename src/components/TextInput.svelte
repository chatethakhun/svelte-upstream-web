<script lang="ts">
  import { Input, Label, Helper, type InputType } from "flowbite-svelte";
  export let label: string = "";
  export let placeholder: string = "";
  export let errorMessage: string = "";
  export let id: string;
  export let name: string;
  export let value: string = "";
  export let type: InputType = "text";
  export let onChange: (event: Event) => any = () => {};

</script>

<div>
  {#if label}
    <Label for={id} color={errorMessage ? "red" : undefined} class="block mb-2">{label}</Label>
  {/if}
  <Input
    {type}
    {id}
    color={errorMessage ? "red" : undefined}
    {name}
    {placeholder}
    {value}
    on:change={onChange}
  />
  {#if errorMessage}
    <Helper class="mt-2" color="red">{errorMessage}</Helper>
  {/if}
</div>
