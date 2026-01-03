<script>
	import { browser } from '$app/environment';
	import NavbarItem from './navbar-item.component.svelte';

	const ComponentConstructor = browser
		? import('./theme-button.component.svelte').then((m) => m.default)
		: new Promise(() => {});
</script>

<header class="p-4">
	<nav
		class="flex justify-center items-center content-container border-2 p-3 bg-white dark:bg-[#1a1a1a]"
	>
		<ul class="flex items-center justify-center gap-2">
			<NavbarItem>
				<a href="/#experience"> Experiencia </a>
			</NavbarItem>
			<NavbarItem>
				<a href="/#projects"> Proyectos </a>
			</NavbarItem>
			<li class="font-bold flex items-center justify-center">
				{#await ComponentConstructor}
					...
				{:then ThemeButton}
					<ThemeButton />
				{/await}
			</li>
		</ul>
	</nav>
</header>
