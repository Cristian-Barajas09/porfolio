import  { type Language, ANGULAR, LARAVEL } from "./languages";

export type Project = {
	id: number;
	title: string;
	image?: string;
	description?: string;
	languages: Language[];
	inWork: boolean;
	githubURL?: string;
}



export const projects: Project[] = [
	{
		id: 1,
		title: "HealthChecker",
		languages: [
			LARAVEL, ANGULAR
		],
		image: '/projects/health-checker.png',
		description: `
		Una aplicación para hacer una revision del estado de tus sitios web
		`,
		inWork: true,
	},
];
