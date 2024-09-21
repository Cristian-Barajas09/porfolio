<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        content: Snippet,
        imageProject: Snippet,
        footer: Snippet
    }

    let {
        content, imageProject, footer
    }: Props = $props()


</script>


<article class="project">
    <div class="project__image">
        {@render imageProject()}
    </div>

    <div class="project__content">
        {@render content()}

    </div>

    <footer class="project__footer">
        {@render footer()}
    </footer>
</article>


<style>
    .project {
        width: 100%;
        background-color: var(--bg-primary);
        color: var(--color-primary);
        padding: 10px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
        display: grid;
        gap: 20px;
        grid-template-areas: "image image"
                            "content content"
                            "footer footer";
        grid-template-rows: 1/2fr 1fr 1fr;
    }

    .project__image {
        height: 100px;
        grid-area: image;
    }

    .project__content {
        grid-area: content ;
    }


    .project__footer {
        grid-area: footer;
    }

    @media(1000px <= width) {
        .project {
            grid-template-areas: "image content"
                                 "image footer";
            grid-template-columns: 0.3fr 1fr;
        }
    }

</style>