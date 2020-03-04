import { Component } from '@angular/core';
import { ThemeSelectionService } from './theme-selection.service';

@Component({
	selector: 'theme-selection',
	templateUrl: 'theme-selection.component.html',
	styleUrls: ['theme-selection.component.scss']
})
export class ThemeSelectionComponent {

	constructor(private themeSelectionService: ThemeSelectionService) {
	}

	get currentTheme() {
		return this.themeSelectionService.theme.getValue();
	}

	set currentTheme(theme: string) {
		this.themeSelectionService.selectTheme(theme);
	}

	get themes() {
		return ThemeSelectionService.Themes;
	}

	get currentTypography() {
		return this.themeSelectionService.typography.getValue();
	}

	set currentTypography(typography: string) {
		this.themeSelectionService.selectTypography(typography);
	}

	get typographies() {
		return ThemeSelectionService.Typographies;
	}
}
