import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public readonly currentProject$: Observable<Project>;
  public readonly allProjects$: Observable<Array<Project>>;
  public projects: Array<Project> = [
    {
      projectId: 'glacier',
      title: 'Glacier Marketing Website',
      thumbSrc: 'glaciermark-thumb.jpg',
      featuredImage: 'glacierMarketingFeature.jpg',
      alt: 'glaciermark website',
      subtitle: 'Website rebuild in Angular 9',
      text: 'Glacier Marketing had a WordPress website that was slow, and was hacked repeatedly. I rebuilt their website in Angular 9, with a light-weight Google Cloud Functions backend.  To make it SEO friendly and fast I used prerendering and lazy-loading, and served the images from an AWS S3 bucket. The site is mobile first and fully responsive. The new site improved loading speeds to 3 times faster on mobile and 2 times faster on desktop according to Google Page Speed Insigts.',
      skills: ['Angular 9', 'TypeScript', 'HTML5/CSS3', 'TypeScript','Firebase','Cloud Functions','Adobe Photoshop', 'AWS S3'],
      link: 's://glaciermark.com/'
    },
    {
      projectId: 'race',
      title: 'Race The Sun App',
      thumbSrc: 'raceTheSun-thumb.png',
      featuredImage: 'raceTheSunFeature.jpg',
      alt: 'Race The Sun App',
      subtitle: 'Single Page Application built in JavaScript',
      text: 'This mobile web app utilizes JavaScript to create a responsive single page web application to plan bike rides. The app uses an external API to get sunrise and sunset times for the Zip code entered and then can let the user know how long a ride they have time for before dark. The app stores bike information in LocalStorage on the user’s device.',
      skills: ['JavaScript', 'HTML5/CSS3', 'Responsive Web Design', 'Single Page Application'],
      link: 's://dresen-tammy.github.io/app2/index.html'
    },
    {
      projectId: 'dinner',
      title: 'What\'s For Dinner App',
      thumbSrc: 'dinner-thumb.png',
      featuredImage: 'WhatsForDinnerFeature.jpg',
      alt: 'Recipe App',
      subtitle: 'Node.Js Recipe App',
      text: 'This app is a recipe finder called What’s for Dinner. It is built using Node.Js and SQL. It queries an external API, Food2Fork to find recipes. User can save recipes to favorites to retrieve later. ',
      skills: ['HTML5/CSS3', 'JavaScript', 'Responsive Design', 'Node.js', 'AJAX', 'PostgreSQL'],
      link: 's://tdresen-recipes.herokuapp.com/'
    },
    {
      projectId: 'david',
      title: 'David Dresen Portfolio',
      thumbSrc: 'daviddresen.jpg',
      featuredImage: 'davidDresenFeature.jpg',
      alt: 'Creative Director Portfolio',
      subtitle: 'Jamstack Website in Angular 9',
      text: 'This is a Jamstack website built in Angular 9. The site is prerendered using Scully to improve page load and security.',
      skills: ['Jamstack', 'JavaScript', 'TypeScript', 'Angular 9', 'Scully', 'Netlify' ],
      link: 's://daviddresen.netlify.app/'
    },
    {
      projectId: 'mariasha',
      title: 'Mariasha Louise Photography',
      thumbSrc: 'mariashaLouise.png',
      featuredImage: 'mariashaFeature.jpg',
      alt: 'Photography Website',
      subtitle: 'Responsive Website',
      text: 'This is an 8 page responsive mobile first website for a Utah based professional photographer. The target audience is women age 18-25 who are primarily view the internet on mobile devices. I simplified and adapted the customer’s existing logo to optimize it for web. I created wireframes in Adobe XD and designed the site and optimized photos in Adobe Photoshop. I created the website in Netbeans using CSS3, HTML5, and a bit of PHP, and used media queries for responsiveness. ',
      skills: ['HTML5/CSS3', 'Responsive Web Design', 'AdobeXD', 'PHP', 'Adobe Photoshop', 'Mobile First Design'],
      link: '://mariashalouise.com/index.html'
    },
    {
      projectId: 'rideKeeper',
      title: 'Ride Keeper Cycling App',
      thumbSrc: 'rideKeeper.jpg',
      featuredImage: 'rideKeeperFeature.jpg',
      alt: 'Cycling App',
      subtitle: 'PHP Cycling App',
      text: 'This is a PHP web application to store bike rides called RideKeeper. User can create edit update and delete individual rides and riding trails.',
      skills: ['PHP', 'HTML5/CSS3', 'JavaScript', 'PostgreSQL'],
      link: '://dresent.herokuapp.com/ride/index.php?action=home'
    },
  ];
  private currentProjectBS: BehaviorSubject<Project>;
  private allProjectsBS: BehaviorSubject<Array<Project>>;
  private defaultProject: Project = {
    projectId: 'default',
    title: 'default',
    thumbSrc: 'default',
    featuredImage: 'default',
    alt: 'default',
    subtitle: 'default',
    text: 'default',
    skills: ['default'],
    link: 'default'
  };

  public constructor() { 
    this.currentProjectBS = new BehaviorSubject<Project>(this.defaultProject);
    this.currentProject$ = this.currentProjectBS.asObservable();
    this.allProjectsBS = new BehaviorSubject<Array<Project>>(this.projects);
    this.allProjects$ = this.allProjectsBS.asObservable();
  }

  public setCurrentProject(projectId: string): void {
    const list = this.allProjectsBS.getValue();
    list.map(project => {
      if (project.projectId === projectId) {
        this.currentProjectBS.next(project);
      }
    })
  }
}
