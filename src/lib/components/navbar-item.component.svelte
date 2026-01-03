<script lang="ts">
	import type { Snippet } from "svelte";

    type Props = {

        children: Snippet<[]>
    }

    let { children }: Props = $props();

</script>


<li class="dark:text-gray-100 hover:text-amber-500 font-bold">
    {@render children()}
</li>