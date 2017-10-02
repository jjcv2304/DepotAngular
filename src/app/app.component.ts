import { Component } from '@angular/core';

@Component({
  selector: 'depot-root',
  template: `
  <depot-nav-bar></depot-nav-bar>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'depot';
}
