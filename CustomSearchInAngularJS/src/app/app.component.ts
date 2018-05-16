import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  insurance = [
    {
      "name": "Ann Libmann",
      "poilcynumber": "0013983887"
    },
    {
      "name": "Ann Summer",
      "poilcynumber": "0013983867"
    },
    {
      "name": "Annbelle Samuel",
      "poilcynumber": "0013983889"
    },
    {
      "name": "Ameer",
      "poilcynumber": "0013983890"
    },
    {
      "name": "Sheik",
      "poilcynumber": "0013983760"
    },
    {
      "name": "Kadar",
      "poilcynumber": "0013983762"
    }
  ];

  //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}
