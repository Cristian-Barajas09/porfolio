<script lang="ts">
	import { workExperience } from '$lib/data/work-experience';
	import WorkExperinceItem from './work-experince-item.component.svelte';
</script>



<div class="flex items-center justify-center">
	<h2 class="dark:text-gray-100 text-4xl font-bold">Experiencia laboral</h2>
</div>

<div class="flex flex-col-reverse gap-2 p-10">
	{#each workExperience as work (work.id)}
		<WorkExperinceItem {...work} />
	{/each}
</div>
