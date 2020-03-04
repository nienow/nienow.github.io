import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ThemeSelectionService {

	public static readonly Themes: string[] = [
		'light-blue-amber',
		'green-orange',
		'purple-lime',
		'red-grey'
	];

	public static readonly Typographies: string[] = [
		'large',
		'normal',
		'small',
		'sans'
	];

	public theme = new BehaviorSubject<string>(null);

	public typography = new BehaviorSubject<string>(null);

	constructor() {
		this.selectTheme(window.localStorage.theme);
		this.selectTypography(window.localStorage.typography);
	}

	public selectTheme(theme: string) {
		if (!theme) {
			theme = ThemeSelectionService.Themes[0];
		}
		this.theme.next(theme);
    window.localStorage.theme = theme;
	}

	public selectTypography(typography: string) {
		if (!typography) {
			typography = ThemeSelectionService.Typographies[1];
		}
		this.typography.next(typography);
    window.localStorage.typography = typography;
	}
}
