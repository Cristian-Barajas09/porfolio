<script lang="ts">
	let { data } = $props();
	let project = $derived(data.project);
	let otherProjects = $derived(data.otherProjects);
</script>

<div class="project__container">
	<div class="bg-white border-2 p-2 project__content">
		<div>
			<h1 class="text-3xl font-bold">{project.title}</h1>
		</div>
		<div>
			<img src={project.image ?? '/icons/favicon.svg'} alt={project.title} />
			<p>{project.description}</p>
		</div>
	</div>
	<div class="bg-white border-2 project__sidebar p-2 flex flex-col gap-5">
		<div>
			<h4 class="text-xl font-bold">Proyectos relacionados</h4>
		</div>
		<div class="flex flex-col w-full">
			{#each otherProjects as project (project.id)}
				<a
					href="/projects/{project.id}"
					class="content-container hovered-container transition-all w-full border-2 p-2"
				>
					{project.title}
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.project__container {
		display: grid;
		grid-template-areas:
			'content'
			'content'
			'sidebar';
		gap: 10px;

		grid-template-columns: 1fr;
	}

	.project__sidebar {
		grid-area: 'sidebar';
	}

	.project__content {
		grid-area: 'content';
	}

	@media (width >= 48rem) {
		.project__container {
			grid-template-areas: 'content content sidebar';
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
