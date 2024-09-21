import { json, type RequestHandler } from "@sveltejs/kit";
import { experiences } from '$lib/shared/data/experiences.json'

export const GET: RequestHandler = () => {
    return json({data: experiences})
}