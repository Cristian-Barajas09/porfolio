<script lang="ts">
	import type { Language } from '$lib/data/languages';
	import ProjectLanguage from './project-language.component.svelte';

	type Props = {
		id: number;
		title: string;
		description?: string;
		languages: Language[];
		image?: string;
		inWork?: boolean;
	};

	let { id, title, description, languages, image, inWork = true }: Props = $props();

</script>


<article class="dark:bg-[#1a1a1a] bg-white relative md:w-[45%] md:h-56 flex flex-col-reverse md:flex-row justify-between project__card content-container">
	{#if inWork}
		<div class="badge-develop">
			<span class="dark:text-gray-100">En desarrollo</span>
		</div>
	{/if}

	<div class="flex flex-col p-2 gap-3 justify-between">
		<div>
			<h3 class="text-lg font-bold dark:text-gray-100">{title}</h3>
			<div class="flex gap-2">
				{#each languages as tecnology (tecnology.name)}
					<ProjectLanguage Icon={tecnology.icon} {...tecnology} />
				{/each}
			</div>
			<p class="text-base dark:text-gray-50">
				{(description ?? "").slice(0, 200)}
				{#if (description?.length ?? 0) > 200}
					...
				{/if}
			</p>
		</div>
		<div class="p-1">
			<a href={`/projects/${id}`} class="px-2 py-1 project__button" type="button">
				<span class="dark:text-gray-100">Ver más</span>
			</a>
		</div>
	</div>

	<div class="w-full h-[200px] md:h-full md:w-3/4">
		<img class="w-full h-full" src={image ?? '/icons/favicon.svg'} alt={title} loading="lazy" />
	</div>
</article>

<style type="postcss">
	@reference "../../app.css";

	.project__card {
		@apply duration-75 transition-all border-2;
	}


	.project__button {
		box-shadow: 5px 5px 1px 0 black;
		@apply duration-75 transition-all cursor-pointer border-2;
	}

	.project__button:hover {
		box-shadow: 0.5px 0.5px 0px 0 black;
	}
	.badge-develop {
		font-size: 10px;
		box-shadow: 3px 3px 1px 0 black;
		@apply absolute font-bold -bottom-4 -right-3 p-1 dark:bg-[#1a1a1a]  bg-white border-2;
	}
</style>
