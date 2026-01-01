<script lang="ts">
	import type { Component } from "svelte";

    type Props = {
        Icon: Component;
        name: string;
    }

    let { Icon, name }: Props = $props();

</script>

<div class="flex items-center gap-1 px-2">
	<div class="w-[20px]">
		<Icon />
	</div>
	<span class="text-sm dark:text-gray-100">
		{name}
	</span>
</div>
