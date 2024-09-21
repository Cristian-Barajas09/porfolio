import { projects } from '$lib/shared/data/projects.json'
import { json, type RequestHandler } from "@sveltejs/kit";



export const GET: RequestHandler = ({ url }) => {

    if(url.searchParams.has('skill')) {
        const skill = url.searchParams.get('skill') as string

        const searchBySkill = projects.filter((project) => project.skills.includes(skill) )

        return json({data:  searchBySkill })
    }

    if(url.searchParams.has('limit')) {
        const limit = parseInt(url.searchParams.get('limit') as string)

        if(isNaN(limit)) return json(
            {
                message: 'limit is not a number'
            }, {status: 400})

        const limitProjects = projects.slice(0, limit)

        return json({data: limitProjects })
    }


    return json({data: projects})
}