import dayjs from 'dayjs';
import type { Dayjs } from "dayjs";


import 'dayjs/locale/es';

dayjs.locale('es');

export type WorkExperience = {
    id: number,
    from: Dayjs,
    to?: Dayjs,
    description: string;
    title: string;
}

export const workExperience: WorkExperience[] = [
    {
        id: 1,
        title: "Maquetador de paginas web",
        from: dayjs("2022-01-01"),
        to: dayjs("2023-09-01"),
        description: "Preparación de contenidos para publicación con wordpress. Optimización de imágenes y análisis de datos."
    },
    {
        id: 2,
        title: "Kunaisoft",
        from: dayjs("2023-06-01"),
        description: "Desarrollar cualquier Software desde un CRM hasta un software para una clinica"
    },
]