<script>
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import '../app.css';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar></AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
