<script lang="ts">

	import Idle from '../components/Idle.svelte';
	import Timer from '../components/Timer.svelte';

	export let data;
	$: state = data.state;
  $: taskInfo = data.taskInfo;
</script>

{#if state === 'IDLE'}
	<Idle />
{:else}
	<Timer {taskInfo} />
{/if}
