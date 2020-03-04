import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDivider,
  MatDividerModule,
  MatMenuModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ThemeSelectionComponent } from './theme-selection/theme-selection.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './timeline/timeline.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillTimelineComponent } from './shared/skill-timeline/skill-timeline.component';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ThemeSelectionComponent,
    TimelineComponent,
    SkillsComponent,
    SkillTimelineComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
