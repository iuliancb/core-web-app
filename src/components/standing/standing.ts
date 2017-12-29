import { Component } from '@angular/core';

/**
 * Generated class for the StandingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'standing-component',
  templateUrl: 'standing.html'
})
export class StandingComponent {

  text: string;

  constructor() {
    console.log('Hello StandingComponent Component');
    this.text = 'Hello World';
  }
}
