import { Component } from '@angular/core';
import { FlexForm } from './form/objects';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'flex-ui-demo';

  autocompleteConfig: FlexForm.Autocomplete.Configuration = {
    placeholder: 'HELLO WORLD',
    data: [
        'one', 'two', 'three'
      ]
  };
}
