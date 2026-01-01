import type { Component } from 'svelte'
import PythonIcon from '$lib/components/icons/python-icon.svelte';
import DotnetIcon from '$lib/components/icons/dotnet-icon.svelte';
import AngularIcon from '$lib/components/icons/angular-icon.svelte';
import PostgresqlIcon from '$lib/components/icons/postgresql-icon.svelte';

export type Language = {
	name: string;
	icon: Component;
}

export const PYTHON: Language = {
    name: "Python",
    icon: PythonIcon
}

export const CSHARP: Language = {
    name: ".Net",
    icon: DotnetIcon
}

export const POSTGRESQL: Language = {
    name: 'Postgresql',
    icon: PostgresqlIcon
}

export const ANGULAR: Language = {
    name: "Angular",
    icon: AngularIcon
}