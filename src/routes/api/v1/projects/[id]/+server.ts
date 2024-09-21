import { json, type RequestHandler } from "@sveltejs/kit";
import { projects } from '$lib/shared/data/projects.json'


export const GET: RequestHandler = ({ params }) => {

    const { id } = params

    if(!id) return json(null, { status: 404 })

    const project = projects.filter((project) => project.id === parseInt(id))

    if(!project) return json(null, { status: 404 })

    return json({ data: project[0] })
}