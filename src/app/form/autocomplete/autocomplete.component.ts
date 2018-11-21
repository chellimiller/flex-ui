import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FlexForm, Util, FlexComponent } from '../objects';

/**
 * Provides a text input enhanced by a panel of suggested options.
 */
@Component({
  selector: 'demo-autocomplete',
  templateUrl: './autocomplete.component.html'
})
export class AutocompleteComponent implements FlexForm.AutocompleteConfiguration, FlexComponent, OnInit {

  @Input() config: FlexForm.AutocompleteConfiguration;

  get data(): FlexForm.AutocompleteConfiguration['data'] {
    return Util.getProperty<FlexForm.AutocompleteConfiguration['data']>(this.config, 'data', []);
  }

  get placeholder(): FlexForm.AutocompleteConfiguration['placeholder'] {
    return Util.getProperty<FlexForm.AutocompleteConfiguration['placeholder']>(this.config, 'placeholder', '');
  }

  public formControl: FormControl = new FormControl();
  public filtered: Observable<string[]>;

  ngOnInit() {
    this.filtered = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue: string = value.toLowerCase();
    return this.data.filter((option) => (option.toLowerCase().indexOf(filterValue) === 0));
  }
}
