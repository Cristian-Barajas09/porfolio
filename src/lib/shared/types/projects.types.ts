export interface ProjectsResponse {
    data: Project[];
}



export interface Project {
    id:          number;
    title:       string;
    image:       string;
    skills:      string[];
    description: string;
}
