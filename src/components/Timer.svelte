<script>
	// @ts-nocheck
	export let task;

	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { poll } from '$lib/utils.js';

	onMount(() => {
		const interval = setInterval(() => updateTime(), 1000);
		const waitInterval = poll('FOCUS');
		return () => {
			clearInterval(waitInterval);
			clearInterval(interval);
		};
	});

	export let totalSeconds;

	let minutesTens = 0;
	let minutesOnes = 0;
	let secondsTens = 0;
	let secondsOnes = 0;

	function updateTime() {
		if (totalSeconds <= 0) {
			fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ state: 'IDLE' })
			}).then(() => {
				invalidateAll();
				console.log('INVALIDATED');
			});
		} else {
			let minutes = Math.floor(totalSeconds / 60);
			let seconds = totalSeconds - minutes * 60;

			minutesTens = Math.floor(minutes / 10);
			minutesOnes = minutes % 10;
			secondsTens = Math.floor(seconds / 10);
			secondsOnes = seconds % 10;

			totalSeconds = totalSeconds - 1;
			console.log('Timer component', totalSeconds);
		}
	}
</script>

<div class="clock flex h-full flex-col items-center justify-center font-sans">
	{#if task}
		<div class="mb-4 font-sans text-3xl">
			Focus on <span
				class="mb-2 max-w-prose overflow-hidden rounded-xl border border-primary-500 p-1 pl-3 pr-3 font-bold"
				>{task}</span
			> for just
		</div>
	{:else}
		<div class="mb-4 font-sans text-3xl">Focus for just</div>
	{/if}
	<div class="timer mb-8 flex text-6xl">
		<div class="digit hour-tens">{minutesTens}</div>
		<div class="digit hour-ones">{minutesOnes}</div>
		<div class="colon">:</div>
		<div class="digit minute-tens">{secondsTens}</div>
		<div class="digit minute-ones">{secondsOnes}</div>
	</div>
</div>

<style>
	.digit {
		@apply p-1;
	}
</style>
