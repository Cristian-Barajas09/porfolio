<script lang="ts">
	import type { Component } from 'svelte';
	import AngularIcon from './icons/angular-icon.svelte';
	import DotnetIcon from './icons/dotnet-icon.svelte';
	import LaravelIcon from './icons/laravel-icon.svelte';
	import PhpIcon from './icons/php-icon.svelte';
	import PythonIcon from './icons/python-icon.svelte';
	import ReactIcon from './icons/react-icon.svelte';

    type Skill = {
        name: string;
        icon: Component;
        title?: string;
    }

	const skills: Skill[] = [
		{ name: '.net', icon: DotnetIcon, title: "Ojo .net core para arriba nada de framework XD" },
		{ name: 'react', icon: ReactIcon },
		{ name: 'angular', icon: AngularIcon },
		{ name: 'python', icon: PythonIcon },
		{ name: 'php', icon: PhpIcon },
		{ name: 'laravel', icon: LaravelIcon }
	];
</script>

<div class="flex items-center justify-center">
	<h2 class="text-4xl font-bold dark:text-gray-100">Habilidades</h2>
</div>
<div
	class="p-5 flex flex-col-reverse md:flex-row gap-5 justify-center items-center"
>
	<div class="flex justify-center flex-wrap md:w-[75%] gap-2 p-2">
		{#each skills as skill (skill.name)}
			<div class="w-1/12 bg-white content-container border-2 p-1">
				<skill.icon {...skill} />
			</div>
		{/each}
	</div>
</div>
