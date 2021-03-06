import { Component } from '@angular/core';

import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  name: string;
  email: string;
  website: string;
  hobbies: string[];
  showHobbies: boolean;
  posts:IPost[];

  constructor(private postService:PostService) {
    this.name = "Adolfo";
    this.email = "Adolfo@mail.com";
    this.website = "https://www.google.com"
    this.hobbies = ['sol','luna','tierra'];
    this.showHobbies = false;
    this.postService.getPosts().subscribe(posts=> {
      this.posts=posts;  
    });
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

interface IPost{
  id: string;
  title:string,
  body: string;
}
