<script lang="ts">
  import { onMount } from "svelte";
  import type {
    Experience,
    ExperiencesResponse,
  } from "../types/experience.types";
  import WorkIcon from "./icons/WorkIcon.svelte";

  let experiences = $state.raw<Experience[]>([]);

  onMount(async () => {
    const res = await fetch("/api/v1/experience");

    const { data } = (await res.json()) as ExperiencesResponse;

    experiences = data;
  });
</script>

<div class="experience">
  <div class="experience__header">
    <WorkIcon styles="width: 25px;"/>
    <h3>Work experience</h3>
  </div>

  <div class="experience__content">
    {#if !experiences}
      <p>Loading...</p>
    {:else}
      <ul>
        {#each experiences as { id, company, description, date } (id)}
          <li class="experience__item">
            <h4>{company}</h4>
            <p>{description}</p>
            <span>{date}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
  .experience {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .experience__header {
    display: flex;
    gap: 10px;
  }

  .experience__header h3{
    font-size: 1.5rem;
  }

  .experience__content {
    width: 100%;
  }

  .experience__content ul {
    list-style-type: none;
    padding: 10px;
  }

  .experience__item {
    padding: 10px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
  }
</style>
