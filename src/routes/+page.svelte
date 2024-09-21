<script lang="ts">
  import DeveloperExperience from "$lib/shared/components/DeveloperExperience.svelte";
  import Presentation from "$lib/shared/components/Presentation.svelte";
  import Projects from "$lib/shared/components/Projects.svelte";
  import SkillsComponent from "$lib/shared/components/SkillsComponent.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Porfolio's Cristian">
</svelte:head>

<section>
  <Presentation />
</section>
<section>
  <DeveloperExperience />
</section>
<section>
  <SkillsComponent />
</section>
<section>
  <h3 class="home__project-title">Some Projects</h3>

  <Projects projects={data.projects} />
</section>

<style>
  .home__project-title {
    text-align: center;
  }
</style>
