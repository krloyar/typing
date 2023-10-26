import { Component } from '@angular/core';

import { faker } from '@faker-js/faker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = faker.lorem.sentence();
  enteredText:string = ''

  onInput(value: string) {
    
    this.enteredText = value;
    console.log(this.enteredText)

    }

    compare(rl: string,el: string) {
      if(!el) return 'pending';

      return rl === el ? 'correct' : 'incorrect';
    }
}
