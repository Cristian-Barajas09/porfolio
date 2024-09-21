<script lang="ts">
    import ProjectItem from "$lib/modules/projects/components/ProjectItem.svelte";
  import { iconsMap } from "$lib/shared/components/icons/index.js";
  import Projects from "$lib/shared/components/Projects.svelte";

    let { data } = $props()
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<section class="projects__container">
    <Projects projects={ data.projects } />
</section>

<style>
    .projects__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        justify-content: center;
        align-items: center;
    }
</style>