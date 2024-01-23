<script>
	// @ts-nocheck

	import stateStore from '../stores/state.js';
	import { page } from '$app/stores';

	import Idle from '../components/Idle.svelte';
	import Clock from '../components/Clock.svelte';
	import Timer from '../components/Timer.svelte';

	export let data;
	$: state = data.data.state;

	console.log(state);
</script>

{#if state === 'IDLE'}
	<Idle />
	<!-- <Timer totalSeconds="1000" /> -->
	<!-- content here -->
{:else if false}
	<Clock totalSeconds="10" />
	<!-- else if content here -->
{:else}
	<Timer totalSeconds={25 * 60} />
	<!-- else content here -->
{/if}
