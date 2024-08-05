import { Component } from '@angular/core';
import { StarDividerDarkComponent } from "../star-divider-dark/star-divider-dark.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarDividerDarkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
