<script lang="ts">

    import PythonIcon from './icons/PythonIcon.svelte'
    import DjangoIcon from "./icons/DjangoIcon.svelte";
    import FastApiIcon from './icons/FastAPIIcon.svelte'
    import JavascriptIcon from "./icons/JavascriptIcon.svelte";

    const skills = [
        {
            id: 'python',
            name: 'Python',
            icon: PythonIcon,
            styles: 'width: 50px;'
        },
        {
            id: 'django',
            name: 'Django',
            icon: DjangoIcon,
            styles: 'width: 50px;color:green;'
        },
        {
            id: 'fastapi',
            name: 'FastAPI',
            icon: FastApiIcon,
            styles: 'width: 50px;'
        },
        {
            id: 'javascript',
            name: 'Javascript',
            icon: JavascriptIcon,
            styles: 'width:50px; color: rgb(198, 198, 1);'
        }
    ]
</script>

<h4>Skills</h4>

<ul class="skills">
    {#each skills as  {id, icon, name, styles} (id)}
        <li class="skills__item">
            <a href={`/projects?skill=${id}`} title={name} aria-label="skills">
                <svelte:component this={icon} styles="{styles}" />
            </a>
        </li>
    {/each}
</ul>

<style>
    h4 {
        text-align: center;
    }
    .skills {
        display: flex;
        list-style-type: none;
        justify-content: center;
        margin: 10px;
        gap: 10px;
    }

    .skills__item a {
        color: var(--color-primary);

    }
</style>