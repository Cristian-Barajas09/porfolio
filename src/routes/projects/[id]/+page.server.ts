import type { Project } from "$lib/shared/types/projects.types";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async (event) => {

    const { id } = event.params as { id: string }

    const url = `/api/v1/projects/${ id }`

    const resp = await event.fetch( url )


    const { data } = await resp.json() as {data: Project}

    return {
        project: data
    }

}