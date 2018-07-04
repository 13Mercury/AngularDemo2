import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  website: string;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = "Adolfo";
    this.email = "Adolfo@mail.com";
    this.website = "https://www.google.com"
    this.hobbies = ['sol','luna','tierra'];
    this.showHobbies = false;
  }

  toggleHobbies()
  {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby)
  {
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }

}
