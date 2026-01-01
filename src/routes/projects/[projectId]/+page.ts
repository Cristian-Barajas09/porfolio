import { projects } from "$lib/data/projects";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {

    const project = projects
        .find(project => project.id === Number(params.projectId))

    const otherProjects = projects
        .filter(project => project.id !== Number(params.projectId))
        .slice(0, 5)

    if (!project) {
        error(404, "No se encontro el proyecto")
    }

    return {
        project,
        otherProjects
    }
}