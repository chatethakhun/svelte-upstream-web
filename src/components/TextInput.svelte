<script lang="ts">
  import { Input, Label, Helper, type InputType } from "flowbite-svelte";
  export let label: string = "Label";
  export let placeholder: string = "";
  export let errorMessage: string = "";
  export let id: string;
  export let name: string;
  export let value: string;
  export let type: InputType = "text";
  export let onChange: (event: Event) => any = () => {};

</script>

<div class="mb-6">
  <Label for={id} color={errorMessage ? "red" : undefined} class="block mb-2">{label}</Label>
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
