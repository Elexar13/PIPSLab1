import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      state('active', style({
        backgroundColor: 'yellow',
        width: '170px',
        height: '170px',
      })),
      transition('start <=> end', animate(1000)),
      transition('start <=> active', animate(1000)),
      transition('active <=> end', animate(1000))
    ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}
