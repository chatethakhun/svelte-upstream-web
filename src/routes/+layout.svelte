<script>
	import './styles.css';
	import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<div class="app">
	<main>
		<slot />
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
