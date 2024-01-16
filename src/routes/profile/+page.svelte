<script lang="ts">
  import { page } from "$app/stores";
  import { Fileupload, Label, Helper } from "flowbite-svelte";
  import TextInput from "../../components/TextInput.svelte";
  import Button from '../../components/Button.svelte'
</script>

<div>
  <div class="flex justify-center">
    <h2
      class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
    >
      {$page.data.user.name.toUpperCase()}'s Profile'
    </h2>
  </div>
  <form method="post" class="mt-2 space-y-6 max-w-[500px] m-auto">
    <div>
      <Label id="profile-image">Profile Image</Label>
      <Fileupload id="profile-image" />
      <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
    </div>
    <TextInput id="name" name="name" label="Name" value={$page.data.user.name} />
    <Button type="submit" label="Save"/>
  </form>
</div>
