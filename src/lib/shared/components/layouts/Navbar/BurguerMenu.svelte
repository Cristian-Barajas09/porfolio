<script lang="ts">
  import { fly } from "svelte/transition";
  import type { MenuItem } from "$lib/shared/types/navbar.types";
  import BurguerMenuIcon from "../../icons/BurguerMenuIcon.svelte";
  import Theme from "./Theme.svelte";
  import XIcon from "../../icons/XIcon.svelte";
  import  type { Action } from "svelte/action";

  type Props = {
    menuItems: MenuItem[];
  };

  let { menuItems }: Props = $props();

  let showMenu = $state<boolean>(false);

  const handleClickActive = () => {
    showMenu = true;
  };

  const handleDeactive = () => {
    showMenu = false;
  };



  const windowResize: Action<Window> = (node) => {
    node.addEventListener('resize', handleDeactive)

    return {
      destroy() {
        node.removeEventListener('resize', handleDeactive)
      }
    }
  }


</script>

<svelte:window use:windowResize />


{#if showMenu}
  <div class="burguer__menu">
    <ul in:fly={{x: 10}} out:fly={{x: 10}} class="burguer__menu-container">
      <li class="burguer__menu-close">
        <button onclick={handleDeactive}>
          <XIcon styles="color:var(--color-primary); width:20px;" />
        </button>
      </li>
      {#each menuItems as { title, path } (path)}
        <li class="burguer__menu-item">
          <a href={path} onclick={handleDeactive}>
            {title}
          </a>
        </li>
      {/each}
      <li class="burguer__menu-item">
        <a href="https://cristianblog.netlify.app/es/" target="_blank">Blog</a>
      </li>
      <li class="burguer__menu-item">
        <Theme />
      </li>
    </ul>
  </div>
{/if}
<div class="burguer__button">
  <button onclick={handleClickActive}>
    <BurguerMenuIcon styles="width:20px;color: var(--color-primary);" />
  </button>
</div>

<style>
    .burguer__menu {
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.324);
    }


    .burguer__button button {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    .burguer__menu-container {
        width: 75%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: var(--bg-primary);
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .burguer__menu-close {
        width: 100%;
        padding: 10px;
    }

    .burguer__menu-close button{
        padding: 2px 5px;
        border: none;
        background: transparent;
        color: var(--color-primary);
        cursor: pointer;
    }

    .burguer__menu-item {
        width: 75%;
        text-align: center;
        padding: 10px;
        display: flex;
        justify-content: center;
    }

    .burguer__menu-item a {
        text-decoration: none;
        color: var(--color-primary);
    }

    @media (1000px <= width) {
      .burguer__button {
        display: none;
      }
    }
</style>
