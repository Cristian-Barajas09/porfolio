<script lang="ts">
	import Navbar from '$lib/components/navbar.component.svelte';
	import type { Attachment } from 'svelte/attachments';
	import '../app.css';
	import { theme, type Theme } from '$lib/store/theme';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();

	onMount(() => {
		const getThemePreference = (): Theme => {
			if (typeof localStorage !== 'undefined') {
				return (localStorage.getItem("theme") as Theme | null) ?? "system"
			}

			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light"
		}


		theme.set(getThemePreference());
	})


	const attachTheme: Attachment<Document> = (element) => {
		if (browser) {
			const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
	
			theme.subscribe((newTheme) => {
				const isDark = newTheme === "dark" || (newTheme === "system" && matchMedia.matches)

				element.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
			})
		};

	}

</script>


<svelte:document {@attach attachTheme} />

<Navbar />

<main class="flex flex-col gap-5 p-3 min-h-screen">
	{@render children()}
</main>

<footer class="p-4">
	<div class="flex justify-end p-3 bg-white dark:bg-[#1a1a1a] border-2">
		<a
			class="dark:bg-[#1a1a1a] content-container hovered-container transition-all bg-white border-2 px-2 py-1"
			href="mailto:cristian.barajasdev+portfolio@gmail.com"
		>
			<span class="dark:text-gray-100"> Contacto </span>
		</a>
	</div>
</footer>
