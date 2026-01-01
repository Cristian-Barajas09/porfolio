<script lang="ts">
    import dayjs, { type Dayjs } from 'dayjs';

    type Props = {
        title: string;
        from: Dayjs;
        to?: Dayjs;
        description: string;
    }

    let { title, from, to, description }: Props = $props();

</script>

{#snippet diffTime(from: Dayjs, to?: Dayjs)}
	{@const end = to ?? dayjs()}
	{@const monthsFloat = end.diff(from, 'month', true)}
	{@const monthsRounded = Math.ceil(monthsFloat)}
	{@const years = Math.floor(monthsRounded / 12)}
	{@const months = monthsRounded % 12}
	{@const yearsPart = years > 0 ? `${years} ${years === 1 ? 'año' : 'años'}` : ''}
	{@const monthsPart = months > 0 ? `${months} ${months === 1 ? 'mes' : 'meses'}` : ''}
	{@const diffLabel =
		yearsPart && monthsPart
			? `${yearsPart} ${monthsPart}`
			: yearsPart || monthsPart || 'Menos de un mes'}

	<span>{diffLabel}</span>
{/snippet}

<div class="content-container border-2 dark:bg-[#1a1a1a] bg-white p-2">
	<div>
		<h3 class="text-xl font-bold dark:text-white">
			{title}
		</h3>
		<div class="dark:text-gray-50 text-gray-600 text-sm">
			<time>
				{from.format('MMM. YYYY')}
			</time>
			<span>-</span>
			<time>
				{#if !to}
					Actualidad
				{:else}
					{to.format('MMM. YYYY')}
				{/if}
			</time>
			•
			{@render diffTime(from, to)}
		</div>
	</div>
	<div class="dark:text-gray-100">
		<p>{description}</p>
	</div>
</div>
