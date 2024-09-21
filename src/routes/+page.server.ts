import type { ProjectsResponse } from "$lib/shared/types/projects.types";
import type { ServerLoadEvent } from "@sveltejs/kit";
import type { PageServerLoad, RouteParams } from "./$types";

const getProjects = async (event: ServerLoadEvent<RouteParams, {}, "/">) => {
    const res = await event.fetch("/api/v1/projects?limit=5");

    if(!res.ok) throw new Error("Projects not found");

    const { data } = (await res.json()) as ProjectsResponse;

    return data;
};

export const load: PageServerLoad = async(event) => {
    const projects = await getProjects(event)


    return {
        projects
    }
}