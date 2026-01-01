<script lang="ts">
	import PresentationSection from '$lib/components/presentation-section.component.svelte';
	import ProjectsSection from '$lib/components/projects-section.component.svelte';
	import WorkExperienceSection from '$lib/components/work-experience/work-experience-section.component.svelte';
</script>

<svelte:head>
	<title>Cristian's portfolio</title>
</svelte:head>

<PresentationSection />



<section id="experience">
	<WorkExperienceSection />
</section>

<!-- projects section -->
<section id="projects" class="p-2 flex flex-col gap-5">
	<ProjectsSection />
</section>
<!-- end projects section -->
