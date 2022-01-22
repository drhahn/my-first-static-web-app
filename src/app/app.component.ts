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
  }
}
