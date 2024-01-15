<script lang="ts">
  export let post: Post;

  import Tag from "./Tag.svelte";

  import { formatToRelativeTime } from "../lib/dateTimeFormat";

  const postedDate = formatToRelativeTime(post.updated_at);
</script>

<article
  class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex justify-between items-center mb-5 text-gray-500">
    {#each post.tags as tag}
      <Tag {tag} />
    {/each}
    <span class="text-sm">{postedDate}</span>
  </div>
  <h2
    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  >
    <a href="#">How to quickly deploy a static website</a>
  </h2>
  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
    {post.content}
  </p>
  <div class="flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <img
        class="w-7 h-7 rounded-full"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
        alt="Jese Leos avatar"
      />
      <span class="font-medium dark:text-white">{post.creator.name}</span>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          {...$$props}
          ><path
            fill="currentColor"
            d="M6.5 13.5h11v-1h-11zm0-3h11v-1h-11zm0-3h11v-1h-11zM4.615 17q-.69 0-1.152-.462Q3 16.075 3 15.385V4.615q0-.69.463-1.152Q3.925 3 4.615 3h14.77q.69 0 1.152.463q.463.462.463 1.152v15.462L17.923 17z"
          /></svg
        >
        <span class="text-sm">{post.meta.comment_count}</span>
      </div>
      <div class="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          {...$$props}
          ><g
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="4"
            ><path
              d="M27.6 18.6v-7.2A5.4 5.4 0 0 0 22.2 6L15 22.2V42h20.916a3.6 3.6 0 0 0 3.6-3.06L42 22.74a3.6 3.6 0 0 0-3.6-4.14z"
            /><path
              fill="currentColor"
              d="M15 22h-4.806C8.085 21.963 6.283 23.71 6 25.8v12.6a4.158 4.158 0 0 0 4.194 3.6H15z"
            /></g
          ></svg
        >
        <span class="text-sm">{post.meta.like_count}</span>
      </div>
    </div>
  </div>
</article>
