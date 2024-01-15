<script lang="ts">
  export let post: Post;

  import Tag from './Tag.svelte'

  import { formatToRelativeTime } from '../lib/dateTimeFormat'

  const postedDate = formatToRelativeTime(new Date())
  
</script>

<article
  class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex justify-between items-center mb-5 text-gray-500">
    <!-- {#each post.relationships.tags.data as tag}
      <Tag />
    {/each} -->
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
      <span class="font-medium dark:text-white"> Jese Leos </span>
    </div>
    
  </div>
</article>
