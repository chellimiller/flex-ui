import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FlexForm, Util } from '../objects';

@Component({
  selector: 'demo-autocomplete',
  templateUrl: './autocomplete.component.html'
})
export class AutocompleteComponent implements FlexForm.Autocomplete.Configuration, OnInit {

  @Input() config: FlexForm.Autocomplete.Configuration;

  get data(): FlexForm.Autocomplete.Configuration['data'] {
    return Util.getProperty<FlexForm.Autocomplete.Configuration['data']>(this.config, 'data', []);
  }

  get placeholder(): FlexForm.Autocomplete.Configuration['placeholder'] {
    return Util.getProperty<FlexForm.Autocomplete.Configuration['placeholder']>(this.config, 'placeholder', '');
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
