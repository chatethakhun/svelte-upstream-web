<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
  } from "flowbite-svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Upstream</span
    >
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src={$page.data.user.thumbnail ?? ""} />
    <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">{$page.data.user.name}</span>
      <span class="block truncate text-sm font-medium"
        >{$page.data.user.email}</span
      >
    </DropdownHeader>
    <DropdownItem on:click={() => goto("profile")}>Profile</DropdownItem>
    <form action="/auth/logout" method="post">
      <Button type="submit" label="Logout" color="none" />
    </form>
  </Dropdown>
</Navbar>
