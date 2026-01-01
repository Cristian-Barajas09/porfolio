<script>
	import GithubIcon from './icons/github-icon.svelte';
	import LinkendinIcon from './icons/linkendin-icon.svelte';
</script>

<section class="p-10">
	<div
		class="bg-white dark:bg-[#1a1a1a] p-5 border-2 flex flex-col-reverse md:flex-row gap-5 justify-center items-center"
	>
		<div class="flex md:w-[75%] flex-col gap-4 p-2">
			<div>
				<h1 class="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl">
					Hola, soy Cristian
				</h1>
			</div>
			<div>
				<!-- todo: pensar en una mejor presentacion -->
				<p class="font-semibold dark:text-gray-100">
					Con dos años de experiencia trabajando como desarrollador de software. Tengo
					una sólida experiencia en lenguajes como javascript, php, python y sus frameworks tales
					como express js en javascript, Laravel en php y Fast API en python.
				</p>
			</div>
			<div class="flex gap-2">
				<a
					class="content-container flex gap-1 items-center justify-center hovered-container border-2 px-2 py-1 transition-all "
					href="https://github.com/Cristian-Barajas09"
				>
					<div class="w-[25px] dark:text-gray-100">
						<GithubIcon />
					</div>
					<span class="dark:text-gray-100"> Github </span>
				</a>
				<a
					class="content-container flex gap-1 items-center justify-center hovered-container border-2 px-2 py-1 transition-all"
					href="https://www.linkedin.com/in/cristian-alejandro-barajas-bol%C3%ADvar/"
				>
					<div class="w-[25px]">
						<LinkendinIcon />
					</div>
					<span class="dark:text-gray-100"> LinkedIn </span>
				</a>
			</div>
		</div>
		<div class="md:w-1/2 h-96">
			<img
				class="w-full h-full content-container object-cover border-2"
				src="/photo_portfolio.jpg"
				alt="Mi imagen"
			/>
		</div>
	</div>
</section>
