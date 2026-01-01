<script lang="ts">
	import ProjectItem from '$lib/components/project-item.component.svelte';
	import { projects } from '$lib/data/projects';
</script>

<div class="flex items-center justify-center">
	<h2 class="text-4xl font-bold dark:text-gray-100">Proyectos</h2>
</div>
<div>
	<div class="flex flex-col md:flex-row flex-wrap justify-center gap-6 p-2">
		{#each projects as project (project.id)}
			<ProjectItem {...project} />
		{/each}
	</div>
</div>
