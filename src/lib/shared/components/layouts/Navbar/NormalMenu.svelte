<script lang="ts">
  import type { MenuItem } from "$lib/shared/types/navbar.types";
  import Theme from "./Theme.svelte";

  type Props = {
    menuItems: MenuItem[];
  };

  let { menuItems }: Props = $props();
</script>

<div class="menu">
  <ul class="menu-container">
    {#each menuItems as { title, path } (path)}
      <li class="menu-item">
        <a href={path}>
          {title}
        </a>
      </li>
    {/each}
    <li class="menu-item">
      <a href="https://cristianblog.netlify.app/es/" target="_blank">Blog</a>
    </li>
    <li class="menu-item">
      <Theme />
    </li>
  </ul>
</div>

<style>
    .menu {
      display: none;
    }

    @media(1000px <= width) {
        .menu {
          display: block;
        }
        .menu-container {
            display: flex;
            gap: 12px;
            list-style-type: none;
        }

        .menu-item {
          padding: 10px;
        }

        .menu-item a {
            text-decoration: none;
            color: var( --color-primary );
        }
    }
</style>