import { writable } from 'svelte/store'

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export const theme = writable<Theme>( Theme.LIGHT )