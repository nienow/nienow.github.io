import {
  Component,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'skill-timeline',
  templateUrl: './skill-timeline.component.html',
  styleUrls: ['./skill-timeline.component.scss']
})
export class SkillTimelineComponent implements OnInit {
  @Input() public skills: Skill[];
  public startYear: number;
  public endYear: number;
  public years: number[];
  public gap: string;
  public groups: Array<Skill[]>;

  public ngOnInit() {

    this.reorganizeSkills();

    let start = Number.MAX_VALUE;
    let end = 0;
    this.skills.forEach((skill: Skill) => {
      skill.range.forEach((range: SkillDateRange) => {
        if (range.start < start) {
          start = range.start;
        }
        if (range.end > end) {
          end = range.end;
        }
      });
    });
    this.startYear = start;
    this.endYear = end;

    this.years = [];
    for (let i = start; i <= end; i++) {
      this.years.push(i);
    }
    this.gap = (99 / (end - start)) + '%';
  }

  public getWidth(skill: Skill) {
    const range: SkillDateRange = skill.range[0];
    const width = ((range.end - range.start) / (this.endYear - this.startYear) * 100) + '%';
    return width;
  }

  public getMargin(skill: Skill) {
    const range: SkillDateRange = skill.range[0];
    const margin = ((range.start - this.startYear) * 100 / (this.endYear - this.startYear)) + '%';
    return margin;
  }

  private reorganizeSkills() {
    const skills: Skill[] = this.skills.slice(0);
    console.log(skills);
    skills.sort((a: Skill, b: Skill) => {
      if (a.range[0].start < b.range[0].start) {
        return -1;
      } else if (a.range[0].start > b.range[0].start) {
        return 1;
      } else if (a.range[0].end > a.range[0].end) {
        return -1;
      } else if (a.range[0].end < a.range[0].end) {
        return 1;
      } else {
        return 0;
      }
    });

    const groups: Array<Skill[]> = [];
    while (skills.length > 0) {
      const first = skills.splice(0, 1)[0];
      const next = skills.find((value: Skill) => {
        return value.range[0].start >= first.range[0].end;
      });
      const group = [first];
      if (next) {
        skills.splice(skills.indexOf(next), 1);
        group.push(next);
      }
      groups.push(group);
    }

    console.log(groups);
    this.groups = groups;
  }

}

export interface Skill {
  name: string;
  range: SkillDateRange[]
}

export interface SkillDateRange {
  start: number;
  end: number;
}
