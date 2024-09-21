<script lang="ts">
  import ProjectItem from "$lib/modules/projects/components/ProjectItem.svelte";
  import type { Project, ProjectsResponse } from "../types/projects.types";
  import { iconsMap } from '$lib/shared/components/icons/index'
  import type { Component } from "svelte";


    let { projects }: {projects: Project[]} = $props();

</script>

{#snippet iconComponent(Icon: Component)}
    <Icon  styles="width:20px" />
{/snippet}


{#if projects.length <= 0}
    <h3 class="projects__not-found">Projects not found</h3>
{:else}
<ul class="projects__container">
    {#each projects as { id, title, image, skills, description } (id)}

    <ProjectItem>

        {#snippet imageProject()}
            <img
                src={image}
                alt={title}
                class="project__image"
                style="view-transition-name: project-{id};"
            />
        {/snippet}

        {#snippet content()}
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        {/snippet}

        {#snippet footer()}
            <div class="project__footer">
                <div class="project__skills">
                    {#each skills as skill (skill) }
                        {@render iconComponent(iconsMap[skill])}
                    {/each}
                </div>
                <a href="/projects/{id}">view more</a>
            </div>
        {/snippet}

    </ProjectItem>

{/each}
  </ul>


{/if}


<style>

    .projects__not-found {
        text-align: center;
    }

    .projects__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        justify-content: center;
        align-items: center;
    }
    .project__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project__footer {
        display: flex;
        justify-content: space-between;
    }

    .project__footer a {
        color: var(--color-primary);
    }

    .project__skills {
        display: flex;
        gap: 4px;
    }
</style>