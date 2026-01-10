import  { PYTHON, POSTGRESQL, CSHARP, type Language, ANGULAR } from "./languages";

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
		title: "Email templater",
		languages: [
			PYTHON, POSTGRESQL
		],
		description: `
		Proyecto para crear tus propias plantillas de email
		inspirado en la plataforma Mailersend
		`,
		inWork: true,
		githubURL: "https://github.com/Cristian-Barajas09/emailcontroller_api"
	},
	{
		id: 2,
		title: "Ecommerce",
		description: `
			Ecommerce hecho para demostrar mis habilidades
			con C# y angular
		`,
		languages: [
			CSHARP, ANGULAR
		],
		inWork: true,
		image: "/ecommerce.png",
		githubURL: "https://github.com/Cristian-Barajas09/NetCommerce"
	},
];
