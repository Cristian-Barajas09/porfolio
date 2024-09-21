<script lang="ts">
  import type { MenuItem } from '$lib/shared/types/navbar.types';
  import BurguerMenu from './BurguerMenu.svelte';
  import NormalMenu from './NormalMenu.svelte';

  const menuItems: MenuItem[] = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/projects",
      title: "Projects",
    },
    {
      path: "/about",
      title: "About me",
    },
  ];

</script>

<header class="header">
  <div class="header__logo">
    <!-- logo will here-->
  </div>

  <nav class="header__nav">
    <BurguerMenu {menuItems} />
    <NormalMenu {menuItems} />
  </nav>
</header>

<style>

  .header {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: end;
  }


  @media (1000px <= width) {
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bg-primary);
      padding: 10px;
      width: 100%;
      view-transition-name: header;
    }

  }
</style>
