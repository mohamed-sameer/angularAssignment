import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img-drawer',
  standalone: true,
  imports: [],
  templateUrl: './img-drawer.component.html',
  styleUrl: './img-drawer.component.css'
})
export class ImgDrawerComponent {
  @Input() imgSrc:string = ""
  @Output() changeStats:EventEmitter<boolean> =  new EventEmitter()
  
  changeState():void {
    this.changeStats.emit(false)
  }
}
