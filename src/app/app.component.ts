import {
  Component,
  OnInit,
  Renderer2
} from '@angular/core';
import { ThemeSelectionService } from './theme-selection/theme-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private currentTheme: string;
  private currentTypography: string;

  constructor(private renderer: Renderer2, private themeSelectionService: ThemeSelectionService) {

  }

  public ngOnInit() {
    this.themeSelectionService.theme.subscribe((theme: string) => {
      if (this.currentTheme) {
        this.renderer.removeClass(document.documentElement, `theme-${this.currentTheme}`);
      }
      this.currentTheme = theme;
      this.renderer.addClass(document.documentElement, `theme-${this.currentTheme}`);
    });

    this.themeSelectionService.typography.subscribe((typography: string) => {
      if (this.currentTypography) {
        this.renderer.removeClass(document.documentElement, `typography-${this.currentTypography}`);
      }
      this.currentTypography = typography;
      this.renderer.addClass(document.documentElement, `typography-${this.currentTypography}`);
    });
  }
}
