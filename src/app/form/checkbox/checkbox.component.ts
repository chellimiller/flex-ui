import { Component, OnInit, Input } from '@angular/core';
import { FlexForm, Util } from '../objects';

/**
 * Provides the `<mat-checkbox>` component configurable with JSON input.
 */
@Component({
  selector: 'demo-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements FlexForm.CheckboxConfiguration, OnInit {

  @Input() set config(config: FlexForm.CheckboxConfiguration) {

    this.data = Util.getProperty<string>(config, 'data', '');

    this.checked = Util.getProperty<boolean>(config, 'checked', false);

    this.disabled = Util.getProperty<boolean>(config, 'disabled', false);
    this.indeterminate = Util.getProperty<boolean>(config, 'indeterminate', false);

    this.labelPosition = Util.getProperty<'before' | 'after'>(config, 'disabled', 'after');
  }

  public data: string;

  public checked: boolean;

  public indeterminate: boolean;
  public disabled: boolean;

  public labelPosition: 'before' | 'after';

  ngOnInit() {
  }

}
