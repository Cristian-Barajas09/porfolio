<script lang="ts">
  import { Theme as ThemeEnum, theme } from "$lib/shared/store/global";
  import MoonIcon from "../../icons/MoonIcon.svelte";
  import SunIcon from "../../icons/SunIcon.svelte";

  const handleClick = () => {
    theme.set(ThemeEnum.DARK === $theme ? ThemeEnum.LIGHT : ThemeEnum.DARK);
  };

  type Icon = {
    [key in ThemeEnum]: any;
  };

  const icons: Icon = {
    dark: MoonIcon,
    light: SunIcon,
  };
</script>

  <button onclick={handleClick}>
    <svelte:component
      this={icons[$theme]}
      styles="width:25px; color:var(--color-primary);"
    />
  </button>


<style>
  

  button {
    border: none;
    background: transparent;
    display: flex;
    cursor: pointer;
  }
</style>
