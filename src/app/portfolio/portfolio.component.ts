import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  public projects: Array<Project> = [
    {
      projectId: 'glacier',
      title: 'Glacier Marketing Website',
      thumbSrc: 'glaciermark-thumb.jpg',
      featuredImage: 'glaciermark',
      alt: 'glaciermark website',
      subtitle: 'sub',
      text: 'text',
      skills: ['1', '2', '3'],
      link: 'link'
    },
    {
      projectId: 'race',
      title: 'Race The Sun App',
      thumbSrc: 'raceTheSun-thumb.png',
      featuredImage: 'raceTheSun',
      alt: 'Race The Sun App',
      subtitle: 'sub',
      text: 'text',
      skills: ['1', '2', '3'],
      link: 'link'
    },
    {
      projectId: 'dinner',
      title: 'What\'s For Dinner',
      thumbSrc: 'dinner-thumb.png',
      featuredImage: 'whatsfordinner',
      alt: 'Recipe App',
      subtitle: 'sub',
      text: 'text',
      skills: ['1', '2', '3'],
      link: 'link'
    },
    {
      projectId: 'david',
      title: 'David Dresen Portfolio',
      thumbSrc: 'daviddresen.jpg',
      featuredImage: 'daviddresen',
      alt: 'Creative Director Portfolio',
      subtitle: 'sub',
      text: 'text',
      skills: ['1', '2', '3'],
      link: 'link'
    },
    {
      projectId: 'mariasha',
      title: 'Mariasha Louise Photography',
      thumbSrc: 'mariashaLouise.png',
      featuredImage: 'Mariasha',
      alt: 'Photography Website',
      subtitle: 'sub',
      text: 'text',
      skills: ['1', '2', '3'],
      link: 'link'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
