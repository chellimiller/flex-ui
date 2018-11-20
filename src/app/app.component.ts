import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flex-ui-demo';

  autocomplete = {
    config: {
      placeholder: 'HELLO WORLD'
    },
    data: {
      options: [
        'one', 'two', 'three'
      ]
    }
  }
}
