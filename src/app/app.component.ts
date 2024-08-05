import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabarComponent } from './navabar/navabar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavabarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smartFramework';

}
