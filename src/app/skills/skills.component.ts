import {
  Component,
  Renderer2
} from '@angular/core';
import { Skill } from '../shared/skill-timeline/skill-timeline.component';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public skills: Skill[] = [
    {
      name: 'Java',
      range: [
        {start: 2007, end: 2019},
      ]
    },
    {
      name: 'JavaScript',
      range: [
        {start: 2009, end: 2019}
      ]
    },
    {
      name: 'MySQL',
      range: [
        {start: 2007, end: 2009}
      ]
    },
    {
      name: 'Oracle',
      range: [
        {start: 2009, end: 2012}
      ]
    },
    {
      name: 'SQL Server',
      range: [
        {start: 2012, end: 2019}
      ]
    },
    {
      name: 'JSP',
      range: [
        {start: 2007, end: 2012}
      ]
    },
    {
      name: 'Spring / Hibernate',
      range: [
        {start: 2007, end: 2012}
      ]
    },
    {
      name: 'AngularJS',
      range: [
        {start: 2014, end: 2018}
      ]
    },
    {
      name: 'Angular (v7) / Typescript',
      range: [
        {start: 2017, end: 2019}
      ]
    }
  ];
}
