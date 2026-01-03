<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Theme } from '$lib/store/theme';
	import { theme } from '$lib/store/theme';
	import ComputerIcon from './icons/computer-icon.svelte';
	import MoonIcon from './icons/moon-icon.svelte';
	import SunIcon from './icons/sun-icon.svelte';

	let showThemeMenu = $state(false);
	let container  = $state<HTMLElement | null>(null);

	const handleTheme = (newTheme: Theme) => {
		theme.set(newTheme);
		if (typeof localStorage !== 'undefined') localStorage.setItem('theme', newTheme);
		showThemeMenu = false;
	};

	const handleShowMenu = () => {
		showThemeMenu = !showThemeMenu;
	};

	function handleDocumentClick(e: MouseEvent) {
		const target = e.target as Node | null;
		if (!container) return;
		if (target && !container.contains(target)) showThemeMenu = false;
	}

	onMount(() => {
		document.addEventListener('click', handleDocumentClick);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleDocumentClick);
	});
</script>

<div class="relative" bind:this={container}>
	<button class="cursor-pointer flex items-center" onclick={handleShowMenu}>
		{#if $theme === 'light'}
			<MoonIcon width={20} height={20} />
		{:else if $theme === 'dark'}
			<SunIcon width={20} height={20} />
		{:else if $theme === 'system'}
			<ComputerIcon width={20} height={20} />
		{/if}
	</button>
	<div
		class={[
			!showThemeMenu && 'hidden',
			'absolute content-container bg-white dark:bg-dark p-3 right-0 border-2'
		]}
	>
		<button
			class="dark:text-gray-100 cursor-pointer hover:text-amber-500"
			onclick={() => handleTheme('system')}
		>
			System
		</button>
		<button
			class="dark:text-gray-100 cursor-pointer hover:text-amber-500"
			onclick={() => handleTheme('dark')}
		>
			Dark
		</button>
		<button
			class="dark:text-gray-100 cursor-pointer hover:text-amber-500"
			onclick={() => handleTheme('light')}
		>
			Light
		</button>
	</div>
</div>
