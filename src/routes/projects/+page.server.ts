import type { ProjectsResponse } from "$lib/shared/types/projects.types"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async(event) => {

    let url = "/api/v1/projects"

    const searchParams = event.url.searchParams;

    if(searchParams.has('skill')) {
        url += `?skill=${searchParams.get('skill')}`
    }


    const res = await event.fetch(url)

    const { data } = (await res.json()) as ProjectsResponse

    return {
        projects: data
    }

}