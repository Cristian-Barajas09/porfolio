<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import type { Action } from "svelte/action";

  // components
  import Navbar from "$lib/shared/components/layouts/Navbar/index.svelte";

  import { Theme, theme } from "$lib/shared/store/global";
  import { onMount } from "svelte";

  onMount(() => {
    if(localStorage.getItem('theme')) {
      const savedTheme = localStorage.getItem('theme') as Theme

      theme.set(savedTheme)

    }
  })

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();

        await navigation.complete;
      });
    });
  });

  const manageTheme: Action<HTMLBodyElement> = (node) => {
    theme.subscribe((theme) => {
      node.setAttribute('theme', theme);
      localStorage.setItem('theme', theme);
    })
  }

</script>

<svelte:body use:manageTheme />

<Navbar />

<main>
  <slot></slot>
</main>

<style>

  :global(:root) {
    --bg-primary: #fff;
    --color-primary: #333;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }

  :global(body[theme="dark"]) {
    --bg-primary: #333;
    --color-primary: #fff;
  }

  :global(body[theme="light"]) {
    --bg-primary: #fff;
    --color-primary: #000;
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px;
    background: var(--bg-primary);
    color: var(--color-primary) ;
    align-items: center;
  }



  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (1000px <= width) {
    main {
      width: 75%;
    }
  }

</style>
