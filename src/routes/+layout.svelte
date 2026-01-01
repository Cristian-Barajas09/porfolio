<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header class="p-4">
	<nav
		class="flex justify-center items-center content-container border-2 p-3 bg-white dark:bg-[#1a1a1a]"
	>
		<ul class="flex gap-2">
			<li class="dark:text-gray-100 hover:text-amber-500 font-bold">
				<a href="/#experience"> Experiencia </a>
			</li>
			<li class="dark:text-gray-100 hover:text-amber-500 font-bold">
				<a href="/#projects"> Proyectos </a>
			</li>
		</ul>
	</nav>
</header>

<main class="flex flex-col gap-5 p-3 min-h-screen">
	{@render children()}
</main>

<footer class="p-4">
	<div class="flex justify-end p-3 bg-white dark:bg-[#1a1a1a] border-2">
		<a
			class="dark:bg-[#1a1a1a] content-container hovered-container transition-all bg-white border-2 px-2 py-1"
			href="mailto:cristianbarajasimasc@gmail.com"
		>
			<span class="dark:text-gray-100"> Contacto </span>
		</a>
	</div>
</footer>
