import { Component } from '@angular/core';
import { FlexForm } from './form/objects';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'flex-ui-demo';

  autocompleteConfig: FlexForm.AutocompleteConfiguration = {
    placeholder: 'HELLO WORLD',
    data: [
        'one', 'two', 'three'
      ]
  };

  checkboxConfig: FlexForm.CheckboxConfiguration = {
    checked: false,
    disabled: false,
    indeterminate: false,
    labelPosition: 'after',
    data: 'HelloWorld'
  };
}
