<script lang="ts">
    import { iconsMap } from "$lib/shared/components/icons/index.js";
    import type { Component } from "svelte";


  let { data } = $props();
</script>

{#snippet iconComponent(Icon: Component)}
    <Icon styles="width:30px;"></Icon>
{/snippet}

<section>
  <article class="project">
    <header class="project__header">
      <h1>{data.project.title}</h1>
    </header>
    <div class="project__content">
      <div class="project__image">
        <img
          src={data.project.image}
          alt={data.project.title}
          style="view-transition-name: project-{data.project.id};"
        />
      </div>
      <div>
        <p>{data.project.description}</p>
      </div>
    </div>

    <footer class="project__footer">
      <h4>Tecnologies</h4>
      <div class="project__skills">
        {#each data.project.skills as skill (skill)}
            {@render iconComponent(iconsMap[skill])}
        {/each}
      </div>
    </footer>
  </article>
</section>

<style>
  .project {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

    .project__image img {
        width: 100%;
    }

    .project__footer {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
