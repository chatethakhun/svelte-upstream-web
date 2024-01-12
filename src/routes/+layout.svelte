<script>
	import './styles.css';
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import Header from '../components/Header.svelte';
  import { page } from '$app/stores';
	export let user;
</script>

<div class="app">
	<main>
		{#if $page.data.user}
			<Header />
		{/if}
		<section class="bg-gray-50 dark:bg-gray-900">
		<slot />
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
