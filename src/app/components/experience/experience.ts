import { Component } from '@angular/core';
import { IRole } from './role.model';
import { ISkill } from './skill.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  roles: IRole[];
  skills: ISkill[];

  constructor(){
    this.roles = [
      {
        title: "Software Development & Design Intern",
        subtitle: "In-N-Out",
        date: "May 2025-July 2025, May 2026 - July 2026",
        li1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
        li2: "Do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        li3: "Ut enim ad minim veniam, quis nostrud exercitation",
        color: "warm-border"
      },
      {
        title: "Game Development Club President",
        subtitle: "GameCraft Club",
        date: "August 2021-May 2024",
        li1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
        li2: "Do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        li3: "Ut enim ad minim veniam, quis nostrud exercitation",
        color: "cool-border"
      }
    ]

    this.skills = [
      {
        title: "Front End",
        apps: [
          {
            name: "HTML5",
            src: "/html5.svg"
          },
          {
            name: "CSS3",
            src: "/css3.svg"
          },
          {
            name: "Angular",
            src: "/angular.svg"
          },
          {
            name: "JavaScript",
            src: "/js.svg"
          }
        ],
        color: "warm-border",
        span: "span 4"
      },
      {
        title: "Design",
        apps: [
          {
            name: "Adobe Illustrator",
            src: "/ai.svg"
          },
          {
            name: "Figma",
            src: "/figma.svg"
          }
        ],
        color: "cool-border",
        span: "span 2"
      },
      {
        title: "Game",
        apps: [
          {
            name: "Unity",
            src: "/unity.svg"
          }
        ],
        color: "warm-border",
        span: "span 2"
      },
      {
        title: "Programming Languages",
        apps: [
          {
            name: "C++",
            src: "/c++.svg"
          },
          {
            name: "C#",
            src: "/c-sharp.svg"
          },
          {
            name: "Java",
            src: "/java.svg"
          },
        ],
        color: "cool-border",
        span: "span 4"
      },
    ]
  }
}
