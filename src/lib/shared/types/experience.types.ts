export interface ExperiencesResponse {
    data: Experience[];
}

export interface Experience {
    id: number;
    jobposition: string;
    company:     string;
    date:        string;
    description: string;
}
