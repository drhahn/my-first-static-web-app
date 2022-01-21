import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}. Time is {{today.toLocaleTimeString()}}</div>`,
})
export class AppComponent {
  value = 'David Hahn';
  today = null;

  constructor() {
    this.today = new Date();
    //var dd = String(today.getDate()).padStart(2, '0');
    //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //var yyyy = today.getFullYear();
    //this.tstamp = mm + '/' + dd + '/' + yyyy;
  }
}
