import  { type Language, ANGULAR, LARAVEL } from "./languages";

export type Project = {
	id: number;
	title: string;
	image?: string;
	link?: string;
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
	{
		id: 2,
		title: "Centro Medico Ser",
		languages: [],
		description: `
		Landing page para un centro medico, con un diseño moderno y elegante
		`,
		image: '/projects/centro-medico-ser.png',
		link: 'https://centromedicoser.cl/',
		inWork: false,
	},
];
