<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { poll } from '$lib/utils';
	import type { TaskInfo } from '$lib/types';

	export let taskInfo: TaskInfo;

	onMount(() => {
		const interval = setInterval(() => updateTime(), 1000);
		const waitInterval = poll('FOCUS');
		return () => {
			clearInterval(waitInterval);
			clearInterval(interval);
		};
	});

	let minutesTens = 0;
	let minutesOnes = 0;
	let secondsTens = 0;
	let secondsOnes = 0;

	let totalSeconds = taskInfo.duration * 60;

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
		}
	}
</script>

<div class="clock flex h-full flex-col items-center justify-center font-sans">
	{#if taskInfo.title}
		<div class="flex flex-col mb-4 font-sans text-3xl">
			<span class="self-center">Focus on</span>
			<span
				class="mb-2 overflow-hidden rounded-xl border border-primary-500 p-2 m-3 font-bold"
				>{taskInfo.title}</span
			>
			<span class="self-center">for just</span>
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
