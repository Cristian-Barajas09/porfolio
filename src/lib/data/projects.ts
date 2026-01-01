import  { PYTHON, POSTGRESQL, CSHARP, type Language, ANGULAR } from "./languages";

export type Project = {
	id: number;
	title: string;
	image?: string;
	description?: string;
	languages: Language[];
	inWork: boolean;
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
		inWork: true
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
		image: "/ecommerce.png"
	},
];
