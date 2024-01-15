<script lang="ts">
  export let tag: Tag;
</script>

<span
  class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...$$props}
    ><g
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      ><path d="M0 0h24v24H0z" /><path
        fill="currentColor"
        d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1-1.555.832L12 18.202l-5.444 3.63a1 1 0 0 1-1.55-.72L5 21V7a5 5 0 0 1 5-5z"
      /></g
    ></svg
  >
  {tag.name}
</span>
