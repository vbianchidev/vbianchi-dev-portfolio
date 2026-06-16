import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export type ProjectType = 'github' | 'figma';

export interface Project {
  type: ProjectType;
  name: string;
  desc: string;
  url: string;
}

@Component({
  selector: 'app-homepage',
  imports: [TranslatePipe, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  projects: Project[] = [
    {
      type: 'github',
      name: 'VBianchi Dev Portfolio',
      desc: 'Projeto de portfólio pessoal hospedado no GitHub, apresentando minhas habilidades, projetos e experiências profissionais.',
      url: 'https://github.com/vbianchidev/vbianchi-dev-portfolio',
    },
  ];

  iconMap: Record<ProjectType, string> = {
    github: 'fa-brands fa-github',
    figma: 'fa-brands fa-figma',
  };

  labelMap: Record<ProjectType, string> = {
    github: 'GitHub',
    figma: 'Figma',
  };
}
