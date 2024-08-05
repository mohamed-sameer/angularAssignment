import { Component } from '@angular/core';
import { StarDividerComponent } from "../star-divider/star-divider.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StarDividerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
