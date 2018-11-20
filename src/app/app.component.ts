import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  link = 'recipe';
  onNavigate(activeLink: string) {
    console.log(activeLink);
    this.link = activeLink;
  }
}
