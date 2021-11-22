import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'treinaWeb';

  myValue = 5.3589;

  myDate = new Date(2017, 6, 7);

  myPromiise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('TreinaWeb')}, 2000);
  });

  constructor() {
  }

  handleClick(event) {
    console.log(event);
  }
}
