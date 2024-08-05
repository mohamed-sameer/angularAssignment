import { Component, Input } from '@angular/core';
import { IPortfolio } from '../iportfolio';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() portfolio!: IPortfolio
}
