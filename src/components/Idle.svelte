<script lang='ts'>
	import { onDestroy, onMount } from 'svelte';
  import { poll } from '$lib/utils';

  let waitInterval: number | undefined;
  let flickInterval: number | undefined;

	onMount(async () => {
		waitInterval = poll('IDLE');
		flickInterval = setInterval(() => {
			const flicker = document.querySelector('.idle')!;
			flicker.classList.remove('flicker');
			setTimeout(() => {
				flicker.classList.add('flicker');
			}, 1000);
		}, 30000);
	});

  onDestroy(() => {
    clearInterval(waitInterval);
    clearInterval(flickInterval);
  })

</script>

<div
	class="idle flicker flex h-full flex-col items-center justify-center pb-12 font-sans text-4xl font-bold text-red-500"
>
	<div class="flex flex-grow flex-col justify-evenly">
		<div>RUN A POMODORO</div>
		<div>REMEMBER YOUR GOALS</div>
		<div>FOCUS. BE MINDFUL</div>
	</div>
</div>

<style>
	.flicker {
		@apply text-white;
	}
</style>
