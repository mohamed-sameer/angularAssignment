import { Component } from '@angular/core';
import { StarDividerDarkComponent } from "../star-divider-dark/star-divider-dark.component";
import { CardComponent } from "../card/card.component";
import { ImgDrawerComponent } from "../img-drawer/img-drawer.component";
import { IPortfolio } from '../iportfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarDividerDarkComponent, CardComponent, ImgDrawerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isOpen:boolean = false;
  imgSrc: string = "";

  portfolios: IPortfolio[] = [
    {
      id: 1,
      imgAlt: 'project1',
      imgSrc: '../assets/poert1.png',
    },
    {
      id: 2,
      imgAlt: 'project2',
      imgSrc: '../assets/port2.png',
    },
    {
      id: 3,
      imgAlt: 'project3',
      imgSrc: '../assets/port3.png',
    },
    {
      id: 4,
      imgAlt: 'project4',
      imgSrc: '../assets/poert1.png',
    },
    {
      id: 5,
      imgAlt: 'project5',
      imgSrc: '../assets/port2.png',
    },
    {
      id: 6,
      imgAlt: 'project6',
      imgSrc: '../assets/port3.png',
    },
  ];
  open():void {
    this.isOpen = true
  }
  close(value:boolean):void {
    this.isOpen = value;
  }
  getImgSrc(src:string):void {
    this.imgSrc = src
  }
}
