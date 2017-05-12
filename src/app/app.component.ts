import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'my-app',
    styleUrls:[ './app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/reports">Reports</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
    title = 'Contextual Security Dashboard';
}
