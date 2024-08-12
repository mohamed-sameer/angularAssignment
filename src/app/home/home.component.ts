import { Component } from '@angular/core';
import { StarDividerComponent } from "../star-divider/star-divider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarDividerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeImgSrc:string = "./assets/avataaars.svg"

}
