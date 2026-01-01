import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light' | "system";

export const theme = writable<Theme>("system");
